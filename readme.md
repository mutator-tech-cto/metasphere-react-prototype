# MetaSphere React Prototype

## `Rationale`

I want to map a tree of textified elements into the flow of sectors split by concetric circles and radial segments.

## `models ? schema`

```javascript
{
    metasphere: {
        possibleKeys: [{
          name: 'sectors',
          kind: 'sectorArray'
        }]
    },
    sectorObject: {
        possibleKeys: [{
            name: 'id',
            kind: '$id$'
        }, {
            name: 'content',
            kind: 'String'
        }, {
            name: 'children',
            kind: 'sectorArray'
        }]
    },
    sectorArray: {
        possibleKeys: [{
            name: '$identifier$',
            kind: 'sectorObject'
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
