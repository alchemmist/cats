<h2><img src="./public/logo.svg" alt="Favicon Preview" width="75" align="center" style="margin-right: 10px"> cats</h2>

[![Github](https://img.shields.io/badge/alchemmist%2Fcats-blue?logo=github&label=github&color=blue)](https://github.com/alchemmist/cats)
![Neovim](https://img.shields.io/badge/Neovim0.11-default?label=Made%20with)
![License](https://img.shields.io/github/license/alchemmist/cats?style=flat)
![React](https://img.shields.io/badge/19.0-default?label=React)
![Vite](https://img.shields.io/badge/6.3-default?label=vite)
[![CU](https://img.shields.io/badge/Central%20University-white?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMzMyIiBoZWlnaHQ9IjMyMSIgdmlld0JveD0iMCAwIDMzMiAzMjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BCjxwYXRoIGQ9Ik0zMzEuOTQxIDEzOS41MDRMMjM3LjAyNiAxOTkuOTAyVjMxMi44OTlMMjIzLjM5MyAzMjFMMTQ2LjUxOSAyNzguMzQ2TDE2NC4yODcgMjY3LjA0OUwyMTguNjU3IDI5Ny4xOTNWMjExLjU1N0wxMjkuMDUzIDI2OC42MkwwIDE5Ny40NDlWMTgxLjUyM0w5NC44ODcyIDEyMS4xMjZWOC4xMDEyTDEwOC41MiAwTDIzNi45OTkgNzEuMjUzNVYxNzcuOTk2TDMwOC45MTcgMTMyLjIzTDI1NC40OTMgMTAyLjA4N1Y4MC45NTNMMzMxLjkxMyAxMjMuNTc4TDMzMS45NDEgMTM4LjEyMVYxMzkuNTA0Wk0yMDkuNzYgMTk1LjM1NUwxMDQuNDQxIDEzNi45NjlMMjMuMDIzNiAxODguNzk3TDEwOC41NzUgMjM2LjE5TDEyOC4zOTYgMjQ3LjE1NkwyMDkuNzg2IDE5NS4zNTVIMjA5Ljc2Wk0yMTguNjI5IDgyLjE5MjVMMTEzLjI4NCAyMy43NzkxVjEyMC43MzlMMjE4LjYwMSAxNzkuMTI2VjgyLjE5MjVIMjE4LjYyOVoiIGZpbGw9IiMxNDE0MTQiLz4KPC9zdmc%2BCg%3D%3D&logoSize=auto&label=CU&labelColor=white&color=grey&link=https%3A%2F%2Fcentraluniversity.ru%2F)](https://centraluniversity.ru/)

This is a site with finny cats. This made as a lab project at first course at Central University and right now using on my [blog](https://alchemmist.xyz) just for fun. You can try a demo right now: [cats.alchemmist.xyz](https://cats.alchemmist.xyz). You can use it very easy with image from [Docker Hub](https://hub.docker.com/repository/docker/alchemmist/cats/general):

```sh
docker pull alchemmist/cats
docker run -d -p 5173:5173 --name cats_service alchemmist/cats
```

aftet this open `localhost:5173` in your browser. You can add `cats` into your docker compsoe:

```yaml
cats:
  image: alchemmist/cats:latest
  container_name: cats
  restart: unless-stopped
  ports:
    - "5173:5173"
  networks:
    - default
```

The website have features authorization (without password and backend, using localstorage). In profile you can change avatar and your login. Every favorites cats you can save to saved. All cats uploaded as simple, declarative json:

```json
[{
    "id": 1,
    "name": "Kotofey",
    "tags": [
      "Pink",
      "Common"
    ],
    "image": "cat1.jpg"
  }, ... ]
```

### Contributing
For any bug, enhancement, questions open issue or write on my email: [anton.ingrish@gmail.com](mailto:anton.ingrish@gmail.com). After cloning repo you can up this with:
```sh
vite --host 0.0.0.0 --port 5173
```
Or `npm` script:
```sh
npm run dev
```



### License

Licensed under the [MIT](./LICENSE) License.

### Contributors

- [@alchemmist](https://github.com/alchemmist) as Anton Grishin
