# MetaSphere React Prototype

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/40be534a585a49188ff21ed66cd64b79)](https://www.codacy.com/app/maxim-chepel/metasphere-react-prototype?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=textthunder/metasphere-react-prototype&amp;utm_campaign=Badge_Grade)

## `Rationale`

I want to map a tree of textified elements into the flow of sectors split by concetric circles and radial segments.

## `models ? schema`

```javascript
{
    metasphere: {
        possibleKeys: [{
          name: "sectors",
          kind: "sectorArray"
        }]
    },
    sectorObject: {
        possibleKeys: [{
            name: "id",
            kind: "$id$"
        }, {
            name: "content",
            kind: "String"
        }, {
            name: "children",
            kind: "sectorArray"
        }]
    },
    sectorArray: {
        possibleKeys: [{
            name: "$identifier$",
            kind: "sectorObject"
        }]
    }
}
```

## `model[metasphere] ~> map[some math] ~> view[metasphere]`

1. Prepare metasphere model.

```javascript
const pseudoSectors = metasphere.sectors.map(
    sector => {
        identifier: metasphere.nextIdentifier(sector.identifier),
        parentRingOrderNumber: deep(sector),
        parentRingSectorOrderNumber: length(previous(sector))
    }
);
```

2. Do some math.

```javascript
const mathematizedSectors = pseudoSectors.map(
    pseudoSector => {
        ring: ...
    }
)
```

3. Render mathematized pseudo sectors.

```javascript
Where react comes.
```
