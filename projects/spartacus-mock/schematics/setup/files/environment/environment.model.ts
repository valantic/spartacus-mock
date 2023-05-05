export interface Environment {
  production: boolean;
  mockServer?: boolean;
  backend: {
    occ: {
      baseUrl?: string;
      prefix: string;
    };
  };
}
