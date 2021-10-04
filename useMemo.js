/* useMemo. */

const Items = React.useMemo(() =>
  listOfItems.map(item => ({
    ...item,
    itemProp1: exorbitantFunction(props.first),
    itemProp2: anotherExorbitantFunction(props.second)
  })), [listOfItems]
)
