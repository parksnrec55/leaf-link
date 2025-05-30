from fastapi import FastAPI, HTTPException, Depends, Query
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import jwt, uvicorn
from passlib.context import CryptContext
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from typing import Optional

from fastapi.middleware.cors import CORSMiddleware
from models import UserCreate, OrderCreate, UserResponse, Token, PlantCreate, PlantRead

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, Boolean, Column, Integer, Float, String, DateTime
import time


# JWT settings
key ="a9xcvj990jJBSM0SSJ0Gjmsdjs0gu98SUIIOYTyghoYoYog8oYUgy8o"
SECRET_KEY = "9e247022027ad593f4e7abb13cf737ef12ec6a1b7b803278f13f32c6444b81f3"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# Helper functions
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


# Database setup
DATABASE_URL = "sqlite:///./plants.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)

class Plant(Base):
    __tablename__ = "plants"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    scientific_name = Column(String, nullable=False)
    evergreen = Column(Boolean, nullable=False)
    zone_min = Column(Integer, nullable=False)
    zone_max = Column(Integer, nullable=False)
    height_range_min = Column(Float, nullable=False)
    height_range_max = Column(Float, nullable=False)
    spread_range_min = Column(Float, nullable=False)
    spread_range_max = Column(Float, nullable=False)
    fall_color = Column(String, nullable=True)
    bloom_period_begin = Column(Integer, nullable=True)
    bloom_period_end = Column(Integer, nullable=True)
    flower_color = Column(String, nullable=True)
    specimen = Column(Boolean, nullable=False)
    bad_soil_types = Column(String, nullable=True)
    good_soil_types = Column(String, nullable=True)
    maintenance = Column(Integer, nullable=False)
    sun_exposure = Column(Integer, nullable=False)
    water_needs = Column(Integer, nullable=False)
    drought_tolerant = Column(Boolean, nullable=False)
    air_pollution_tolerant = Column(Boolean, nullable=False)
    clay_soil_tolerant = Column(Boolean, nullable=False)
    animal_tolerance = Column(String, nullable=True)
    notes = Column(String, nullable=True)

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    phone = Column(String)
    address = Column(String)
    flavor = Column(String)
    frosting_type = Column(String)
    frosting_flavor = Column(String)
    order_date = Column(Float, default=time.time())
    order_fulfilled_date = Column(DateTime, default=None)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# FastAPI app
app = FastAPI()

origins = [
    "https://www.parksnrec.dev",
    "https://parksnrec.dev"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get the current user
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(status_code=401, detail="Invalid authentication credentials")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise credentials_exception
    return user

# API routes
@app.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == user.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already taken")
    hashed_password = get_password_hash(user.password)
    new_user = User(username=user.username, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return UserResponse(username=new_user.username)

@app.post("/token", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    access_token = create_access_token(data={"sub": user.username}, expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/plants/", response_model=PlantRead)
def create_plant(plant: PlantCreate, db: Session = Depends(get_db)):
    db_plant = Plant(**plant.dict())
    db.add(db_plant)
    db.commit()
    db.refresh(db_plant)
    return db_plant

@app.delete("/plants/{plant_id}", response_model=dict)
def delete_plant(plant_id: int, db: Session = Depends(get_db)):
    plant = db.query(Plant).filter(Plant.id == plant_id).first()
    if not plant:
        raise HTTPException(status_code=404, detail="Plant not found")
    db.delete(plant)
    db.commit()
    return {"message": "Plant deleted successfully"}

@app.get("/plants/search")
def search_plants(
    name: Optional[str] = Query(None),
    scientific_name: Optional[str] = Query(None),
    evergreen: Optional[bool] = Query(None),
    zone_min: Optional[int] = Query(None),
    zone_max: Optional[int] = Query(None),
    height_range_min: Optional[int] = Query(None),
    height_range_max: Optional[int] = Query(None),
    spread_range_min: Optional[int] = Query(None),
    spread_range_max: Optional[int] = Query(None),
    flower_color: Optional[str] = Query(None),
    specimen: Optional[bool] = Query(None),
    drought_tolerant: Optional[bool] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(Plant)
    
    if name:
        query = query.filter(Plant.name.ilike(f"%{name}%"))
    if scientific_name:
        query = query.filter(Plant.scientific_name.ilike(f"%{scientific_name}%"))
    if evergreen is not None:
        query = query.filter(Plant.evergreen == evergreen)
    if zone_min:
        query = query.filter(Plant.zone_min >= zone_min)
    if zone_max:
        query = query.filter(Plant.zone_max <= zone_max)
    if height_range_min:
        query = query.filter(Plant.height_range_min >= height_range_min)
    if height_range_max:
        query = query.filter(Plant.height_range_max <= height_range_max)
    if spread_range_min:
        query = query.filter(Plant.spread_range_min >= spread_range_min)
    if spread_range_max:
        query = query.filter(Plant.spread_range_max <= spread_range_max)
    if flower_color:
        query = query.filter(Plant.flower_color.ilike(f"%{flower_color}%"))
    if specimen is not None:
        query = query.filter(Plant.specimen == specimen)
    if drought_tolerant is not None:
        query = query.filter(Plant.drought_tolerant == drought_tolerant)
    
    plants = query.all()
    return {"results": [plant.__dict__ for plant in plants]}

if __name__ == "__main__":
    config = uvicorn.Config(
        app,
        host="0.0.0.0",
        port=2829,
        ssl_keyfile="/etc/letsencrypt/live/parksnrec.dev/privkey.pem",
        ssl_certfile="/etc/letsencrypt/live/parksnrec.dev/fullchain.pem"
    )
    server = uvicorn.Server(config)
    server.run()