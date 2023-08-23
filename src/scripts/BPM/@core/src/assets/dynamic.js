import { 
    world, DynamicPropertiesDefinition
} from '@minecraft/server';

const NBT = {
    Collection: [],
    Create: options => {
        let { name, type } = options;
        if (name == undefined || !['boolean','number','string'].includes(type)) return;
        NBT.Collection.push(options);
    },
    Reader: event => NBT.Collection.forEach(property => {
        const { name, type } = property;
        const prop = new DynamicPropertiesDefinition();
        if (type == 'boolean') prop.defineBoolean(name);
        else if (type == 'number') prop.defineNumber(name);
        else if (type == 'string') prop.defineString(name,property.size || 100);
        event.propertyRegistry.registerWorldDynamicProperties(prop);
    }),
    getData: name => world.getDynamicProperty(name),
    setData: (name,value) => world.setDynamicProperty(name,value)
}; export { NBT }
