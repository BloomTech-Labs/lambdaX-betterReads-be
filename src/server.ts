import { ApolloServer } from 'apollo-server';
import { createContext } from './context';
import { schema } from './schema';

new ApolloServer({ schema, context: createContext }).listen(
  { port: 4000 },
  () => console.log(`🚀 Server ready at: http://localhost:4000`)
);
