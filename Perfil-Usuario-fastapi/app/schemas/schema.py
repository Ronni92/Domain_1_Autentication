from __future__ import annotations
import strawberry
from app.schemas.types import ProfileType, ProfileInput
from app.services.profile_service import get_profile_by_email, update_profile_data

@strawberry.type
class Query:
    @strawberry.field
    async def get_profile(self, email: str) -> ProfileType | None:
        return await get_profile_by_email(email)

@strawberry.type
class Mutation:
    @strawberry.mutation
    async def update_profile(self, input: ProfileInput) -> ProfileType:
        return await update_profile_data(input)

schema = strawberry.Schema(query=Query, mutation=Mutation)