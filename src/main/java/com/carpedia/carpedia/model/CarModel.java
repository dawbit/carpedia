package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Range;

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

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "startproduction", length = 4)
    private String startproduction;

    @Column(name = "endproduction", length = 4)
    private String endproduction;

    @ManyToMany
    @OrderColumn(name = "id")
    @JoinTable(
            name = "car_engines",
            joinColumns = @JoinColumn(name = "car_id"),
            inverseJoinColumns = @JoinColumn(name = "engine_id")
    )
    private List<EngineModel> engine = new ArrayList<>();

    @Column(name = "ncap")
    @Range(max = 5)
    private int ncap;

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

    public String getStartproduction() {
        return startproduction;
    }

    public void setStartproduction(String startproduction) {
        this.startproduction = startproduction;
    }

    public String getEndproduction() {
        return endproduction;
    }

    public void setEndproduction(String endproduction) {
        this.endproduction = endproduction;
    }

    public List<EngineModel> getEngine() {
        return engine;
    }

    public void setEngine(List<EngineModel> engine) {
        this.engine = engine;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public int getNcap() {
        return ncap;
    }

    public void setNcap(int ncap) {
        this.ncap = ncap;
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

    protected CarModel(){

    }

    public CarModel(CompanyModel company, String name, String startproduction,
                    String endproduction, List<EngineModel> engine, int ncap,
                    CountryModel country, SegmentModel segment, BodyTypeModel bodytype,
                    UserModel user) {
        this.company = company;
        this.name = name;
        this.startproduction = startproduction;
        this.endproduction = endproduction;
        this.engine = engine;
        this.ncap = ncap;
        this.country = country;
        this.segment = segment;
        this.bodytype = bodytype;
        this.user = user;
    }

}
