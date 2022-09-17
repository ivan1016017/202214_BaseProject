import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { AerolineaAeropuertoService } from './aerolinea-aeropuerto.service';


@Controller('airlines')
@UseInterceptors(BusinessErrorsInterceptor)
export class AerolineaAeropuertoController {
    constructor(private readonly aerolineaAeropuertoService: AerolineaAeropuertoService){}

    @Post(':aerolineaId/artworks/:aeropuertoId')
    async addAirportToAirline(@Param('aerolineaId') aerolineaId: string, @Param('aeropuertoId') aeropuertoId: string){
        return await this.aerolineaAeropuertoService.addAirportToAirline(aerolineaId, aeropuertoId);
    }

    @Get(':aerolineaId/artworks/:aeropuertoId')
    async findAirportFromAirline(@Param('aerolineaId') aerolineaId: string, @Param('aeropuertoId') aeropuertoId: string){
        return await this.aerolineaAeropuertoService.findAirportFromAirline(aerolineaId, aeropuertoId);
    }

    @Get(':aerolineaId/artworks')
    async findAirportsFromAirline(@Param('aerolineaId') aerolineaId: string){
        return await this.aerolineaAeropuertoService.findAirportsFromAirline(aerolineaId);
    }

    
    @Delete(':aerolineaId/artworks/:aeropuertoId')
    @HttpCode(204)
    async deleteAirportsFromAirline(@Param('aerolineaId') aerolineaId: string, @Param('aeropuertoId') aeropuertoId: string){
        return await this.aerolineaAeropuertoService.deleteAirportsFromAirline(aerolineaId, aeropuertoId);
    }   


}
