package com.carpedia.carpedia.model;

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

    @Column(name = "foundationyear", length = 4)
    private int foundationyear;

    //@OneToOne(mappedBy = "company", cascade = CascadeType.ALL)
    //@JoinColumn(name = "country_id")
    //private CountryModel country;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    private CountryModel country;
    //private int country_id;

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFoundationyear(int foundationyear) {
        this.foundationyear = foundationyear;
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

    public int getFoundationyear() {
        return foundationyear;
    }

    public CountryModel getCountry() {
        return country;
    }

    protected CompanyModel() {
    }

    public CompanyModel(String name, CountryModel country) {
        this.name = name;
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
