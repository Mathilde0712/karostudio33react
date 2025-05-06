const MentionsLegales = () => {
    return (
      <div className="mentions-legales">
        <h1>Mentions légales</h1>
  
        <section>
          <h2>Éditeur du site</h2>
          <p>
            Nom : [Ton nom complet]<br />
            Statut : Auto-entrepreneur<br />
            SIRET : [Numéro SIRET]<br />
            Adresse : [Ton adresse postale]<br />
            Email : <a href="mailto:tonemail@example.com">tonemail@example.com</a>
          </p>
        </section>
  
        <section>
          <h2>Hébergement</h2>
          <p>
            Hébergeur : [Nom de l’hébergeur]<br />
            Adresse : [Adresse de l’hébergeur]<br />
            Site : <a href="https://www.nomdelhebergeur.com" target="_blank" rel="noopener noreferrer">www.nomdelhebergeur.com</a>
          </p>
        </section>
  
        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, photographies, etc.) sont la propriété exclusive de [Ton nom ou nom commercial],
            sauf mention contraire, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
            Toute reproduction ou utilisation sans autorisation est interdite.
          </p>
        </section>
  
        <section>
          <h2>Données personnelles</h2>
          <p>
            Les données personnelles collectées via le formulaire de contact ne sont utilisées que pour répondre aux demandes.
            Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à :
            <a href="mailto:tonemail@example.com">tonemail@example.com</a>
          </p>
        </section>
  
        <section>
          <h2>Cookies</h2>
          <p>
            Ce site peut utiliser des cookies à des fins de navigation ou de statistiques. Vous pouvez configurer votre navigateur pour les refuser.
          </p>
        </section>
  
        <section>
          <h2>Responsabilité</h2>
          <p>
            Les informations publiées sur ce site sont fournies à titre indicatif. L’éditeur ne saurait être tenu responsable des erreurs ou omissions.
          </p>
        </section>
  
        <p className="date">Dernière mise à jour : [Mois Année]</p>
      </div>
    );
  };
  
  export default MentionsLegales;