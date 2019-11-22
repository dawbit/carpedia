package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "company")
public class CompanyModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "foundation", length = 4)
    private int foundation;

    @ManyToOne
    @JoinColumn(name = "country_id")
    @JsonBackReference(value = "country-company")
    private CountryModel country;

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFoundation(int foundation) {
        this.foundation = foundation;
    }

    public void setCountry(CountryModel country) {
        this.country = country;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getFoundation() {
        return foundation;
    }

    public CountryModel getCountry() {
        return country;
    }

    protected CompanyModel() {
    }

    public CompanyModel(String name, int foundation, CountryModel country) {
        this.name = name;
        this.foundation = foundation;
        this.country = country;
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
