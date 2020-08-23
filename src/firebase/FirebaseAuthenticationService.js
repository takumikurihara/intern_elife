export class FirebaseAuthenticationService {
  constructor(firebaseService) {
    this.m_auth = firebaseService.auth;
    this.m_ensureAuthLoadedPromise = new Promise(res => {
      // Firebase.auth.Auth の authStateChanged が1回以上発火していることを保証する
      this.m_ensureAuthLoadedHandlerUnsubscriber = this.m_auth.onAuthStateChanged(
        user => {
          res();
          this.m_ensureAuthLoadedHandlerUnsubscriber?.();
        }
      );
    });
  }

  async signInWithEMailAndPassword(email, password) {
    await this.m_auth.signInWithEmailAndPassword(email, password);
  }

  currentUserEmail() {
    return this.m_auth.currentUser?.email;
  }

  currentUserId() {
    return this.m_auth.currentUser?.uid;
  }

  async ensureSignedIn() {
    await this.m_ensureAuthLoadedPromise;

    if (this.m_auth.currentUser === null) {
      throw new NotLoggedInException();
    }
  }
}

export class NotLoggedInException extends Error {
  constructor() {
    super();
  }
}
