package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<CompanyModel> company;
    //private long company_id;

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