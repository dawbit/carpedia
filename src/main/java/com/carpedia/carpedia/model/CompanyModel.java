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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    private CountryModel country;
    //private int country_id;

    protected CompanyModel() {
    }

    public CompanyModel(String name, CountryModel country) {
        this.name = name;
        this.country = country;
    }

    @Override
    public String toString() {
        return String.format("Company[id=%d, name='%s', country='%s']", id, name, country);
    }
}
