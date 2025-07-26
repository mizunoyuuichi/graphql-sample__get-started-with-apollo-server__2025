# GraphQL × Apollo の Docker環境

`Get started with Apollo Server`のサンプルを試せる環境 となっています。
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