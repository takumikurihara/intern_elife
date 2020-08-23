import DejimaApiClient from "../dejima/dejima-client/src/ApiClient";
import ImageApiClient from "../dejima/dejima-image-client/src/ApiClient";
import { FirebaseService } from "../firebase/FirebaseService";
import { FirebaseAuthenticationService } from "../firebase/FirebaseAuthenticationService";

const state = {
  dejimaApiClient: null,
  dejimaImageApiClient: null,
  firebaseService: null,
  firebaseAuthService: null,
};

const getters = {};

const actions = {};

const mutations = {
  initialize() {
    state.firebaseService = new FirebaseService();
    state.firebaseAuthService = new FirebaseAuthenticationService(
      state.firebaseService
    );

    const dejimaApiClient = new DejimaApiClient();
    dejimaApiClient.basePath = process.env.VUE_APP_DEJIMA_API_ROOT;
    dejimaApiClient.authentications["APIKeyHeader"].apiKey =
      process.env.VUE_APP_DEJIMA_API_KEY;
    state.dejimaApiClient = dejimaApiClient;

    const dejimaImageApiClient = new ImageApiClient();
    dejimaImageApiClient.basePath = process.env.VUE_APP_DEJIMA_IMAGE_API_ROOT;
    state.dejimaImageApiClient = dejimaImageApiClient;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
