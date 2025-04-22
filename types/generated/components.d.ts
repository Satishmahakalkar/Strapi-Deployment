import type { Schema, Struct } from '@strapi/strapi';

export interface BasicRelation extends Struct.ComponentSchema {
  collectionName: 'components_basic_relations';
  info: {
    displayName: 'Relation';
  };
  attributes: {
    categories: Schema.Attribute.Relation<'oneToMany', 'api::category.category'>;
  };
}

export interface BasicSimple extends Struct.ComponentSchema {
  collectionName: 'components_basic_simples';
  info: {
    description: '';
    displayName: 'simple';
    icon: 'ambulance';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    test: Schema.Attribute.String;
  };
}

export interface BlogTestComo extends Struct.ComponentSchema {
  collectionName: 'components_blog_test_comos';
  info: {
    description: '';
    displayName: 'test comp';
    icon: 'air-freshener';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'toto'>;
  };
}

export interface DefaultApple extends Struct.ComponentSchema {
  collectionName: 'components_default_apples';
  info: {
    description: '';
    displayName: 'apple';
    icon: 'apple-alt';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DefaultCar extends Struct.ComponentSchema {
  collectionName: 'components_default_cars';
  info: {
    displayName: 'car';
    icon: 'align-right';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface DefaultClosingperiod extends Struct.ComponentSchema {
  collectionName: 'components_closingperiods';
  info: {
    description: '';
    displayName: 'closingperiod';
    icon: 'angry';
  };
  attributes: {
    dish: Schema.Attribute.Component<'default.dish', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
    end_date: Schema.Attribute.Date & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'toto'>;
    media: Schema.Attribute.Media;
    start_date: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface DefaultDish extends Struct.ComponentSchema {
  collectionName: 'components_dishes';
  info: {
    description: '';
    displayName: 'dish';
    icon: 'address-book';
  };
  attributes: {
    categories: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'My super dish'>;
    picture: Schema.Attribute.Media;
    price: Schema.Attribute.Float;
    very_long_description: Schema.Attribute.RichText;
  };
}

export interface DefaultOpeningtimes extends Struct.ComponentSchema {
  collectionName: 'components_openingtimes';
  info: {
    description: '';
    displayName: 'openingtimes';
    icon: 'calendar';
  };
  attributes: {
    dishrep: Schema.Attribute.Component<'default.dish', true>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'something'>;
    time: Schema.Attribute.String;
  };
}

export interface DefaultRestaurantservice extends Struct.ComponentSchema {
  collectionName: 'components_restaurantservices';
  info: {
    description: '';
    displayName: 'restaurantservice';
    icon: 'cannabis';
  };
  attributes: {
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    media: Schema.Attribute.Media;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'something'>;
  };
}

export interface DefaultTemp extends Struct.ComponentSchema {
  collectionName: 'components_default_temps';
  info: {
    description: '';
    displayName: 'temp';
    icon: 'adjust';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.relation': BasicRelation;
      'basic.simple': BasicSimple;
      'blog.test-como': BlogTestComo;
      'default.apple': DefaultApple;
      'default.car': DefaultCar;
      'default.closingperiod': DefaultClosingperiod;
      'default.dish': DefaultDish;
      'default.openingtimes': DefaultOpeningtimes;
      'default.restaurantservice': DefaultRestaurantservice;
      'default.temp': DefaultTemp;
    }
  }
}
