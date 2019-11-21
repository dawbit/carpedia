package com.carpedia.carpedia.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "segment")
public class SegmentModel implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    protected SegmentModel() {
    }

    public SegmentModel(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format("Segment[id=%d, country='%s']", id, name);
    }
}
