package com.sda.travelagency.entity;

import com.sda.travelagency.entity.enumeration.MealType;
import com.sda.travelagency.entity.enumeration.PaymentType;
import com.sda.travelagency.entity.enumeration.TransportType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@Entity
@Table(name = "TRIPS")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDate tripStartDate;

    LocalDate tripEndDate;

    @OneToOne
    Destination destination;

    @Embedded
    Price tripPrice;

    @Enumerated(EnumType.STRING)
    TransportType typeOfTransport;

    @OneToOne
    SecurityRules securityRules;

    @Enumerated(EnumType.STRING)
    PaymentType paymentType;

    @Enumerated(EnumType.STRING)
    MealType mealType;

    @Transient
    HotelFacilities hotelFacilities;

    @ElementCollection
    @CollectionTable(name = "PHOTOS")
    @Column(name="photo")
    List<String> photos;
}