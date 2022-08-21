package com.sda.travelagency.dto;

import com.sda.travelagency.entity.enumeration.MealType;
import com.sda.travelagency.entity.enumeration.PaymentType;
import com.sda.travelagency.entity.enumeration.TransportType;
import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

@Builder
public record TripDto(
        LocalDate tripStartDate,

        LocalDate tripEndDate,

        DestinationDto destination,

        //inside dto field can have even different type
        //because dto is only for data transfer (as json mostly)
        String cost,

        String currency,


        TransportType typeOfTransport,

        SecurityRulesDto securityRules,

        PaymentType paymentType,

        MealType mealTypes,

        HotelFacilitiesDto hotelFacilities,

        List<String> photos






) {
}