package com.sda.travelagency.dto;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Valid
public record DestinationDto(

        Long id,
        @NotNull
        @Size(min = 4)
        String country,

        @NotNull
        @Size(min = 2)
        String city,

        @NotNull
        @Size(min =3, max = 256)
        String hotelName
) {
}