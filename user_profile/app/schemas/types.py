import strawberry

@strawberry.type
class ProfileType:
    email: str
    name: str | None
    phone: str | None

@strawberry.input
class ProfileInput:
    email: str
    name: str | None = None
    phone: str | None = None