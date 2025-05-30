from pydantic import BaseModel
from typing import Optional

# Database models
class OrderCreate(BaseModel):
    name: str
    phone: str
    address: str
    flavor: str
    frostingType: str
    frostingFlavor: str

class UserCreate(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    username: str

class Token(BaseModel):
    access_token: str
    token_type: str

class PlantBase(BaseModel):
    name: str
    scientific_name: str
    evergreen: bool
    zone_min: int
    zone_max: int
    height_range_min: float
    height_range_max: float
    spread_range_min: float
    spread_range_max: float
    fall_color: Optional[str] = None
    bloom_period_begin: Optional[int] = None
    bloom_period_end: Optional[int] = None
    flower_color: Optional[str] = None
    specimen: bool
    bad_soil_types: Optional[str] = None
    good_soil_types: Optional[str] = None
    maintenance: int
    sun_exposure: int
    water_needs: int
    drought_tolerant: bool
    air_pollution_tolerant: bool
    clay_soil_tolerant: bool
    animal_tolerance: str
    notes: Optional[str] = None

class PlantCreate(PlantBase):
    pass

class PlantRead(PlantBase):
    id: int

    class Config:
        orm_mode = True