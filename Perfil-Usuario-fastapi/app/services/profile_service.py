from app.db import profiles_collection
from app.schemas.types import ProfileType, ProfileInput

async def get_profile_by_email(email: str) -> ProfileType | None:
    doc = await profiles_collection.find_one({"email": email})
    return ProfileType(**doc) if doc else None

async def update_profile_data(input: ProfileInput) -> ProfileType:
    await profiles_collection.update_one(
        {"email": input.email},
        {"$set": input.__dict__},
        upsert=True
    )
    doc = await profiles_collection.find_one({"email": input.email})
    return ProfileType(**doc)