package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "car")
public class CarModel implements Serializable {
    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinColumn(name = "company_id")
    @JsonBackReference(value = "car-company")
    @JsonIgnore
    private CompanyModel company;

    @Column(name = "name")
    private String name;

    @Column(name = "start_production")
    private String start_production;

    @Column(name = "end_production")
    private String end_production;

    @ManyToMany
    @OrderColumn(name = "id")
    @JoinTable(
            name = "car_engines",
            joinColumns = @JoinColumn(name = "car_id"),
            inverseJoinColumns = @JoinColumn(name = "engine_id")
    )
    private List<EngineModel> engine = new ArrayList<>();
    //private EngineModel engine;

    @Column(name = "NCAPstar")
    private int ncap_stars;

    @ManyToOne
    @JoinColumn(name = "country_id")
    @JsonBackReference(value = "car-country")
    @JsonIgnore
    private CountryModel country;

    @ManyToOne
    @JoinColumn(name = "segment_id")
    @JsonBackReference(value = "car-segment")
    @JsonIgnore
    private SegmentModel segment;

    @ManyToOne
    @JoinColumn(name = "bodytype_id")
    @JsonBackReference(value = "car-bodytype")
    @JsonIgnore
    private BodyTypeModel bodytype;

    @ManyToOne
    //@JoinColumn(name = "user_id")
    @JoinColumn(name = "author")
    @JsonBackReference(value = "car-author")
    @JsonIgnore
    private UserModel user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public CompanyModel getCompany() {
        return company;
    }

    public void setCompany(CompanyModel company) {
        this.company = company;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStart_production() {
        return start_production;
    }

    public void setStart_production(String start_production) {
        this.start_production = start_production;
    }

    public String getEnd_production() {
        return end_production;
    }

    public void setEnd_production(String end_production) {
        this.end_production = end_production;
    }

    public List<EngineModel> getEngine() {
        return engine;
    }

    public void setEngine(List<EngineModel> engine) {
        this.engine = engine;
    }

    public int getNcap_stars() {
        return ncap_stars;
    }

    public void setNcap_stars(int ncap_stars) {
        this.ncap_stars = ncap_stars;
    }

    public CountryModel getCountry() {
        return country;
    }

    public void setCountry(CountryModel country) {
        this.country = country;
    }

    public SegmentModel getSegment() {
        return segment;
    }

    public void setSegment(SegmentModel segment) {
        this.segment = segment;
    }

    public BodyTypeModel getBodytype() {
        return bodytype;
    }

    public void setBodytype(BodyTypeModel bodytype) {
        this.bodytype = bodytype;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public CarModel(CompanyModel company, String name, String start_production,
                    String end_production, EngineModel engine, int ncap_stars,
                    CountryModel country, SegmentModel segment, BodyTypeModel bodytype,
                    UserModel user) {
        this.company = company;
        this.name = name;
        this.start_production = start_production;
        this.end_production = end_production;
        this.engine = (List<EngineModel>) engine;
        this.ncap_stars = ncap_stars;
        this.country = country;
        this.segment = segment;
        this.bodytype = bodytype;
        this.user = user;
    }
}
