#Instalacion
```
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt
```

#Arrancamos proyecto
```
npm run start:dev
```

#modules & resource
```
nest g mo modules/auth
nest g res modules/auth
```

#controllers & service
```
nest g co modules/auth
nest g s modules/auth
```