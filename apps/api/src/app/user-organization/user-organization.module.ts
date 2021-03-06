import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrganizationService } from './user-organization.services';
import { UserOrganizationController } from './user-organization.controller';
import { UserOrganization } from './user-organization.entity';

@Module({
	imports: [TypeOrmModule.forFeature([UserOrganization])],
	controllers: [UserOrganizationController],
	providers: [UserOrganizationService],
	exports: [UserOrganizationService]
})
export class UserOrganizationModule {}
