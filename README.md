# GraphQL × Apollo の Docker環境
ApolloServer で GraphQLを試せる環境 となっています。
https://www.apollographql.com/docs/apollo-server


<samll>下記を実行して、localhost:4000 へアクセス</small>
```
docker compose build --no-cache
docker compose up
```


<samll>下記のようなクエリを試せる</small>
```
query books {
  books {
    title
    author {
      name
    }
  }
}

query authors {
  authors {
    name
		books { 
      title 
    }
  }
}

query GetBooksAndAuthors {
  books {
    title
  }

  authors {
    name
  }
}

query GetBooks {
  books {
    title
    author {
      name
    }
  }
}

```


```
query { 
  feed {
    id
    description
  }
}

mutation {
  post(url: "www.a", description: "desc") {
    id
    description
    url
  }
}
```


indexは 手を入れていった履歴をファイルに残していっているため、
index.js, index2.js, index3.js とインクリメントして行ってます。

prisma
https://www.prisma.io/docs

https://www.prisma.io/docs/orm/tools/prisma-cli#installation

https://www.prisma.io/docs/orm/prisma-migrate/getting-started