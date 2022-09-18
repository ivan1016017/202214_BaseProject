import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AeropuertoDto } from 'src/aeropuerto/aeropuerto.dto';
import { AeropuertoEntity } from 'src/aeropuerto/aeropuerto.entity';
import { AerolineaDto } from '../aerolinea/aerolinea.dto';
import { AerolineaEntity } from '../aerolinea/aerolinea.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';


@Controller('airlines')
@UseInterceptors(BusinessErrorsInterceptor)
export class AerolineaAeropuertoController {
    constructor(private readonly aerolineaAeropuertoService: AerolineaAeropuertoService){}

    @Post(':aerolineaId/airports/:aeropuertoId')
    async addAirportToAirline(@Param('aerolineaId') aerolineaId: string, @Param('aeropuertoId') aeropuertoId: string){
        return await this.aerolineaAeropuertoService.addAirportToAirline(aerolineaId, aeropuertoId);
    }

    @Get(':aerolineaId/airports/:aeropuertoId')
    async findAirportFromAirline(@Param('aerolineaId') aerolineaId: string, @Param('aeropuertoId') aeropuertoId: string){
        return await this.aerolineaAeropuertoService.findAirportFromAirline(aerolineaId, aeropuertoId);
    }

    @Get(':aerolineaId/airports')
    async findAirportsFromAirline(@Param('aerolineaId') aerolineaId: string){
        return await this.aerolineaAeropuertoService.findAirportsFromAirline(aerolineaId);
    }

    @Put(':aerolineaId/airports/:aeropuertoId')
    async updateAirportFromAirline(@Param('aerolineaId') aerolineaId: string,@Param('aeropuertoId') aeropuertoId: string, @Body() aeropuertoDto: AeropuertoDto) {
      const aeropuerto: AeropuertoEntity= plainToInstance(AeropuertoEntity, aeropuertoDto);
      return await this.aerolineaAeropuertoService.updateAirportFromAirline(aerolineaId, aeropuertoId, aeropuerto);
    }

    
    @Delete(':aerolineaId/airports/:aeropuertoId')
    @HttpCode(204)
    async deleteAirportsFromAirline(@Param('aerolineaId') aerolineaId: string, @Param('aeropuertoId') aeropuertoId: string){
        return await this.aerolineaAeropuertoService.deleteAirportsFromAirline(aerolineaId, aeropuertoId);
    }   


}
