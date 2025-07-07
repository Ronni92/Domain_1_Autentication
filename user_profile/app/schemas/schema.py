import strawberry

@strawberry.type
class Query:
    hello: str = "Hola desde GraphQL"

schema = strawberry.Schema(query=Query)
