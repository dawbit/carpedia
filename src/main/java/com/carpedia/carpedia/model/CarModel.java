package com.carpedia.carpedia.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "car")
public class CarModel implements Serializable {
    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

//    @ManyToOne
//    @JoinColumn(name = "country_id")
//    @JsonBackReference(value = "country-company")
//    private CountryModel country;

//    @ManyToOne
//    @JsonBackReference(value = "car-company")
//    @JsonIgnore
//    private List<CompanyModel> company;
//
//    @Column(name = "start_production")
//    private Date start_production;
//
//    @Column(name = "end_production")
//    private Date end_production;
//
//    //@ManyToMany engine
//
//    @Column(name = "NCAPstar")
//    private byte ncap_stars;
//
//    @OneToMany(mappedBy = "country")
//    @JsonBackReference(value = "car-country")
//    @JsonIgnore
//    private List<CountryModel> country;
//
//    @OneToMany(mappedBy = "segment")
//    @JsonBackReference(value = "car-segment")
//    @JsonIgnore
//    private List<SegmentModel> segment;
//
//    @OneToMany(mappedBy = "bodytype")
//    @JsonBackReference(value = "car-bodytype")
//    @JsonIgnore
//    private List<BodyTypeModel> bodytype;
//
//    @OneToMany(mappedBy = "user")
//    @JsonBackReference(value = "car-author")
//    @JsonIgnore
//    private List<UserModel> author;


}