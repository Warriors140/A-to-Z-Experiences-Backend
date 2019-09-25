
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('experiences').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('experiences').insert([
        { 
          event_name: 'Walk, talk, and admire the Botonical Preserve',
          location: 'Laguna Botonical Preserve',
          date_time: 'July 4th ',
          cost: 12,
          category: 'outdoors'
        },
        {
          event_name: 'Book club',
          location: 'Dana Point Library',
          date_time: 'Dec. 23 2019',
          cost: 2312,
          category: 'indoors'
        },
        {
          event_name: 'Join us for Yoga',
          location: 'Yoga Studio',
          date_time: 'July 23, 2079',
          cost: 12,
          category: 'outdoors'
        }, {
          event_name: 'Hike to the top of cresent bay',
          location: 'Hike Ave',
          date_time: '',
          cost: 123,
          category: 'parks/rec'
        }, {
          event_name: 'Space exploration',
          location: 'Mars',
          date_time: 'not relevant',
          cost: 123123,
          category: 'excercise'
        }, {
          event_name: 'Mission Dog Park',
          location: '25242 Highland Park, Ontario',
          date_time: '5pm, 02/12/2020',
          cost: 20,
          category: 'outdoors'
        }, {
          event_name: 'Wine tasting at Opela Vineyard',
          location: 'To Be Determined',
          date_time: '5pm',
          cost: 60,
          category: 'other'
        }, {
          event_name: 'Beach day',
          location: 'Newport Beach',
          date_time: '1pm',
          cost: 0,
          category: 'parks/rec'
        }
      ]);
    });
};
