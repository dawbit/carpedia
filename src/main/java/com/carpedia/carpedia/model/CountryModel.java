package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "country")
public class CountryModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "country")
    @JsonBackReference(value = "country-company")
    //@JsonIgnore
    private List<CompanyModel> company;

    @OneToMany(mappedBy = "country")
    @JsonBackReference(value = "car-country")
    private List<CarModel> car;


    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CompanyModel> getCompany() {
        return company;
    }

    public void setCompany(List<CompanyModel> company) {
        this.company = company;
    }

    public List<CarModel> getCar() {
        return car;
    }

    public void setCar(List<CarModel> car) {
        this.car = car;
    }

    protected CountryModel() {
    }

    public CountryModel(String name) {
        this.name = name;
    }

//    @Override
//    public String toString(){
//        return new com.google.gson.Gson().toJson(this);
//    }
    @Override
    public String toString(){
        return new com.google.gson.Gson().toJson(this);
    }
}
