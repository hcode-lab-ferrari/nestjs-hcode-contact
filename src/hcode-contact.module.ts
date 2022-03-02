import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HcodeContactService } from './hcode-contact.service';

@Module({
    imports: [PrismaModule],
    providers: [HcodeContactService],
    exports: [HcodeContactService],
})
export class HcodeContactModule {}
