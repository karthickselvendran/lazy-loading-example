import React from "react";
// import { sum } from "./sum";

const About = () => {
  const value = Math.random(); // error boundary logic - to generate error artificially
  if (value > 0.5) {
    throw new Error("Error");
  }
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() =>
          import("../sum.js").then((module) => {
            alert(module.sum(1, 2));
          })
        }
      >
        Add 1+2
      </button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at
        mauris eu odio maximus elementum at in enim. Aliquam nisi dolor, egestas
        nec ante ac, tristique eleifend elit. Aliquam varius tortor eu ipsum
        sollicitudin semper. Aliquam ultricies sapien suscipit nulla eleifend
        ornare. Vivamus vitae urna lorem. Proin hendrerit egestas justo
        tincidunt maximus. Sed id auctor odio. Nunc auctor ante id placerat
        vestibulum. Ut non neque aliquam, ornare felis nec, efficitur ex.
        Phasellus et vulputate lacus. Donec scelerisque lorem in metus molestie,
        sit amet laoreet magna cursus. Aliquam ut posuere est, congue malesuada
        felis. Donec nec tempor turpis. Duis vitae dictum erat, eget tincidunt
        lectus. In consectetur sem enim, ut mollis nulla molestie sit amet. In
        hac habitasse platea dictumst. Suspendisse sed tristique metus. Cras
        mattis molestie urna ut ultricies. Aenean molestie tempus fringilla.
        Etiam congue turpis est. Aenean vitae lectus ante. Mauris non libero
        sem. Phasellus a imperdiet leo. Sed sem nisl, viverra eu commodo sed,
        blandit eu metus. Vivamus dictum scelerisque justo eget placerat.
        Suspendisse justo arcu, consequat quis commodo ac, malesuada ac mi.
        Praesent a urna facilisis, scelerisque lacus ut, convallis turpis.
        Nullam in aliquam ipsum. Mauris ac elit at justo mollis sollicitudin et
        id ex. Etiam commodo tristique magna, ac fringilla lectus. Quisque
        dapibus neque eu elit malesuada viverra. Fusce id enim eu odio feugiat
        imperdiet a sit amet quam. Curabitur dapibus nec sapien at aliquam.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed vitae ante at est rhoncus placerat ut non
        eros. Duis ante magna, tempus id pulvinar sed, imperdiet non ipsum. Sed
        eu nisl porttitor, ultrices nunc sit amet, pulvinar tortor. Mauris
        blandit interdum sem. Vestibulum elit nisl, malesuada quis enim non,
        auctor tristique nulla. Suspendisse metus dui, varius ut mauris nec,
        laoreet sollicitudin ante. Morbi sagittis, tortor sed gravida bibendum,
        nisi urna sagittis eros, a ullamcorper nisl lacus et massa. Aliquam
        magna leo, interdum et sollicitudin ut, mollis a erat. Sed euismod lorem
        ex, vehicula feugiat elit aliquam sed. Donec nec fringilla ante. Morbi
        sit amet purus tristique nisi vulputate cursus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Integer nec ligula leo. Vestibulum
        convallis tortor in velit euismod laoreet. Fusce vulputate pretium
        turpis, ac dictum justo semper et. Duis dignissim ut metus ut laoreet.
        Donec consectetur sem ultrices consectetur bibendum. Sed semper elit
        commodo ante lacinia maximus. Nam dapibus suscipit ipsum non ultricies.
        Nunc sit amet sem sed mauris vehicula congue vitae eu quam. Aliquam at
        metus imperdiet, ultrices nunc et, bibendum justo. Nunc vehicula
        faucibus faucibus. Praesent at dignissim ex. In maximus erat id nibh
        bibendum, in placerat mauris porta. Suspendisse eget dui quam. Ut eget
        augue purus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Fusce malesuada enim tortor, vel aliquet
        est semper sed. Cras consequat eu est vitae cursus. Cras nisi nibh,
        blandit a ligula sit amet, pellentesque ornare mi. Aliquam erat
        volutpat. Mauris vitae porttitor lorem. Nullam commodo nunc non tortor
        mattis, a vehicula odio accumsan. Ut ultricies, erat eu tempor rhoncus,
        sem massa imperdiet lorem, nec condimentum mauris nisl at urna. Morbi
        turpis turpis, semper a leo in, pretium porta libero. Fusce convallis
        felis turpis, fringilla elementum dolor blandit eu. Aliquam erat
        volutpat. Morbi justo enim, consectetur et rutrum vitae, consequat at
        mauris. Curabitur hendrerit ipsum vel lectus porttitor, sit amet gravida
        leo bibendum. Sed ullamcorper gravida orci, vitae viverra risus iaculis
        porta. Aenean eu augue ullamcorper massa venenatis molestie. In sagittis
        erat dui, sit amet luctus mi dignissim consequat. Nulla a posuere lacus.
        Suspendisse aliquam venenatis turpis, nec feugiat ex ultricies vitae.
        Sed placerat at enim nec faucibus. Maecenas ornare, augue in vulputate
        blandit, leo turpis commodo justo, dictum eleifend mi nunc non lectus.
        Proin a ex lectus. Nulla placerat nisi et mauris gravida, quis convallis
        mi pharetra. Mauris nisl lacus, finibus aliquam posuere id, euismod at
        leo. Aliquam commodo, mauris id facilisis porttitor, nulla erat sodales
        lacus, quis dictum nulla enim non neque. Nulla non erat id erat
        tincidunt dictum. Nam maximus eleifend sagittis. Quisque at dui dui.
        Integer luctus ullamcorper cursus. Phasellus id venenatis turpis. Ut
        hendrerit lacinia quam eget condimentum. Ut eget sem lobortis, rhoncus
        erat non, auctor tellus. Aenean malesuada sem ac turpis finibus, nec
        varius mi bibendum. Donec fringilla aliquet lorem, et hendrerit felis
        aliquet id. In faucibus vitae nisl nec vulputate. Nulla facilisi.
        Pellentesque tristique viverra dui laoreet condimentum. Vestibulum dui
        massa, volutpat et lorem eu, consectetur faucibus purus. Aenean pretium
        maximus odio, vitae consequat lacus viverra iaculis. Nullam bibendum
        tellus est, eget blandit arcu suscipit a. Pellentesque consectetur ante
        ac turpis sollicitudin, vel porta odio lobortis. Praesent lacinia
        blandit quam, vel ultricies turpis. Etiam mi massa, eleifend eget nunc
        nec, vulputate aliquam felis. Quisque consequat neque vel massa
        fringilla, vitae lobortis nibh finibus. Interdum et malesuada fames ac
        ante ipsum primis in faucibus.
      </p>
    </div>
  );
};

export default About;
