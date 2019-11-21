package com.carpedia.carpedia.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "country")
public class CountryModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @OneToOne(mappedBy = "country", fetch = FetchType.LAZY, optional = false)
    private CompanyModel company;
    //private long company_id;

    protected CountryModel() {
    }

    public CountryModel(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Country[id=%d, country='%s']", id, name);
    }
}
