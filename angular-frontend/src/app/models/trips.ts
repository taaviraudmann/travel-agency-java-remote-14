//TODO: refactor some fiels into enums - the same as on backend side
export interface DestinationDto {
  country:string,
  city:string,
  hotelName: string
}

export interface SecurityRulesDto {
  travelRestrictions: string,
  insurance: string
}

export interface AttractionDto {
  description:string
  ageRestrictions: string
  photos: Array<string>
}

export interface hotelFacilitiesDto {
  attractions: Array<AttractionDto>,
  apartmentFacilities: Array<string>
}

export interface TripDto {
  tripStartDate: string,
  tripEndDate: string,
  destination: DestinationDto,
  cost: number,
  currency: string,
  typeOfTransport: string,
  securityRules: SecurityRulesDto,
  paymentType: string
  mealTypes: string,
  hotelFacilities: hotelFacilitiesDto,
  photos: Array <string>// string [] is the same as Array<string>

}
