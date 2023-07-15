const { BlogPost } = require('../models');

const postData = [
    {
        title: 'Screaming Tulips',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat vehicula tortor, ut molestie nulla viverra sed. Pellentesque mi turpis, lobortis mollis bibendum ut, malesuada id erat. Etiam scelerisque libero at sodales viverra. Morbi euismod luctus ex. Ut sed tortor vulputate, laoreet elit tincidunt, efficitur ligula. Sed feugiat lectus et risus lobortis ullamcorper. Suspendisse metus dui, auctor et placerat eget, ullamcorper ultrices enim. Maecenas mollis, nibh a faucibus bibendum, enim ex molestie dolor, non convallis orci sem sit amet libero. Cras sollicitudin lectus ut ante ultrices venenatis. Quisque in diam ac mauris tristique luctus id et risus. Proin nibh felis, tincidunt porttitor lacinia et, lacinia sed ligula. Sed suscipit blandit erat, at mattis velit sollicitudin a. Morbi sit amet nisi a eros commodo pellentesque. Morbi rutrum arcu arcu.',
        user_id: 1
    },
    {
        title: 'Turtles will bite',
        body: 'Phasellus dictum tempor augue, sit amet pretium enim faucibus vel. Nam non tincidunt turpis. Morbi blandit vehicula tortor quis sollicitudin. Proin sit amet urna orci. Suspendisse pretium suscipit lobortis. Sed sollicitudin imperdiet sem, ut tempor nisl faucibus vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris quis diam congue, aliquam leo at, interdum eros. Ut tincidunt non risus in suscipit. Maecenas tincidunt elit massa, sit amet tristique tortor venenatis eget. Maecenas a fringilla tellus. Donec id iaculis mauris. Nullam eleifend maximus massa.',
        user_id: 1
    },
    {
        title: 'Not another stain',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare, massa ut tincidunt euismod, nibh magna feugiat mauris, et ultricies risus sem id diam. Phasellus lacinia ante lacus, sit amet fringilla metus hendrerit in. Integer semper ut lacus vel venenatis. Duis viverra, massa vel faucibus semper, nulla est porta nisi, eget interdum metus turpis eget enim. Duis tempus augue quis sapien commodo, non tincidunt magna interdum. Quisque vel tempus urna. Quisque vitae fringilla ligula. Praesent fringilla quam eu vestibulum fermentum',
        user_id: 2
    },
    {
        title: 'Crazy chocolate',
        body: 'Sed gravida diam urna, id blandit ex facilisis in. Nunc egestas, elit sit amet volutpat tempus, magna sapien ullamcorper risus, eget finibus nibh risus in lorem. Nam accumsan felis at blandit malesuada. Vestibulum quis nibh eget dolor consectetur auctor sed lacinia ligula. Suspendisse eu massa ullamcorper, mattis nibh ultrices, dapibus orci. Pellentesque pellentesque, mi at semper molestie, ante quam ultricies erat, sed viverra lectus metus eu ligula. Pellentesque nec interdum ex. Aenean a imperdiet est',
        user_id: 2
    },
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;