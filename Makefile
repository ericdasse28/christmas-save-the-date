deploy:
	docker build -t christmas-invite .
	docker run -d -p 8081:80 --name christmas-invite christmas-invite
