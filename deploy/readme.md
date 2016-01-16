## Deploy

### Prerequisites

1. Ansible 1.9 or higher is required
2. Create `playbooks/files` folder and put ssl certificates there (`app.crt` & `app.key`)

### Installing roles dependencies

```
cd deploy
sudo ansible-galaxy install -r requirements.txt -f
```

### Configuring new server(s)

Setup server (typically need only once, for a newly created server):
```
./bin/setup-server.sh -i hosts/staging -e "env=staging"
```

Redeploy nginx alone:

```
./bin/setup-server.sh -i hosts/staging --tags "nginx" -e "env=staging"
```

## Deploy application

```
./bin/deploy-app.sh -i hosts/staging -e "env=staging docker_tag=latest"
```
