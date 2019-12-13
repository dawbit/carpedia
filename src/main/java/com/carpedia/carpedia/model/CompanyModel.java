package com.carpedia.carpedia.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "company")
public class CompanyModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "foundation", nullable = false, length = 4)
    @Pattern(regexp = "^[1-2][0-9][0-9][0-9]")

    private int foundation;

    @ManyToOne
    @JoinColumn(name = "country_id")
    @JsonBackReference(value = "country-company")
    @JsonIgnore
    private CountryModel country;

    @OneToMany(mappedBy = "company")
    @JsonBackReference(value = "car-company")
    private List<CarModel> car;

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

    public List<CarModel> getCar() {
        return car;
    }

    public void setCar(List<CarModel> car) {
        this.car = car;
    }

    protected CompanyModel() {
    }

    public CompanyModel(String name, int foundation, CountryModel country) {
        this.name = name;
        this.foundation = foundation;
        this.country = country;
    }

}
