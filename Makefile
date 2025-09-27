all: docker-hub

docker-hub:
	docker build -t cats .
	docker tag cats alchemmist/cats:latest
	docker push alchemmist/cats:latest
