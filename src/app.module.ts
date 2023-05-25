import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { ProjectModule } from './project/project.module';
import { Project } from './project/entity/project.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { TypeuserModule } from './typeuser/typeuser.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      /*
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'finance_part',
      entities: [User, Project],
      synchronize: true,
      */
      entities: [User, Project],
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      database: 'sql12621233',
      username: 'sql12621233',
      password: 'TjeRxdBmhx',
      port: 3306,
      synchronize: true,
    }),
    ProjectModule,
    AuthModule,
    ProfileModule,
    TypeuserModule,
  ],
})
export class AppModule {}
