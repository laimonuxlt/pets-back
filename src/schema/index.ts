import { loadSchemaSync } from 'graphql-tools';
import { merge } from 'lodash';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

import animalResolvers from './resolvers/animal';
import animalDetailsResolvers from './resolvers/animalDetails';
import genderResolvers from './resolvers/gender';
import statusResolvers from './resolvers/status';
import breedResolvers from './resolvers/breed';
import speciesResolvers from './resolvers/species';
import colorResolvers from './resolvers/color';
import animalMicrochipResolvers from './resolvers/animalMicrochip';
import animalRegistrationResolvers from './resolvers/animalRegistration';
import organizationResolvers from './resolvers/organization';
import userResolvers from './resolvers/user';
import eventResolvers from './resolvers/event';
import uploadResolver from './resolvers/upload';
import chipCompanyResolvers from './resolvers/chipCompany';
import organizationTask from './resolvers/organizationTask';
import municipalityResolver from './resolvers/municipality';
import formerAnimalOwnerResolvers from './resolvers/formerAnimalOwner';
import dateResolver from './resolvers/date';
import chipInstallPlaceTranslationResolver from './resolvers/chipInstallPlaceTranslation';

const schema = loadSchemaSync('src/schema/typeDefs/*.graphql', {
    loaders: [new GraphQLFileLoader()],
    resolvers: merge(
        animalResolvers,
        animalDetailsResolvers,
        animalMicrochipResolvers,
        animalRegistrationResolvers,
        genderResolvers,
        statusResolvers,
        breedResolvers,
        speciesResolvers,
        colorResolvers,
        organizationResolvers,
        userResolvers,
        eventResolvers,
        uploadResolver,
        chipCompanyResolvers,
        organizationTask,
        municipalityResolver,
        formerAnimalOwnerResolvers,
        dateResolver,
        chipInstallPlaceTranslationResolver,
    ),
});

export default schema;
