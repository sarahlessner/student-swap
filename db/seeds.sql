USE skillswap_db;

INSERT INTO skills
  (skill_name)
VALUES
  ("Math homework"),
  ("Color coded closet"),
  ("Make stuff out of pallets"),
  ("Put birds on things"),
  ("Pick a drunk ass up at the bar"),
  ("Write an English paper"),
  ("Post-Party cleanup"),
  ("Make a beer bong"),
  ("Let out the dog"),
  ("Bake some brownies"),
  ("Personal makeover"),
  ("Web development tutor"),
  ("Dissect a past relationship"),
  ("Kill that spider"),
  ("Make a home cooked meal"),
  ("Make a fake id"),
  ("Social media manager");

  INSERT INTO users
    (google_id, name, email, photo)
  VALUES
    ("012344", "Sarah", "sarahweik@sarahweik.com", "https://student-skill-swap.herokuapp.com/img/sarah.jpg"),
    ("012345", "Ashish", "ashish@ashish.com", "https://student-skill-swap.herokuapp.com/img/Ashish.jpg"),
    ("012346", "Tali", "tali@tali.com", "https://student-skill-swap.herokuapp.com/img/tali.png");

  INSERT INTO Offereds
      (skillId, UserId)
  SELECT
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Tali')
    FROM Skills skill
    WHERE skill.skill_name = 'Color coded closet';

  INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '2'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Tali')
    FROM Skills skill
    WHERE skill.skill_name = 'Make a fake id';


    INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '16'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Sarah')
    FROM Skills skill
    WHERE skill.skill_name = 'Put birds on things';

     INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '16'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Sarah')
    FROM Skills skill
    WHERE skill.skill_name = 'Web development tutor';

INSERT INTO Offereds
      (skillId, UserId)
  SELECT
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Ashish')
    FROM Skills skill
    WHERE skill.skill_name = 'Put birds on things';

INSERT INTO Offereds
      (skillId, UserId)
  SELECT
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Ashish')
    FROM Skills skill
    WHERE skill.skill_name = 'Web development tutor';

  INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '4'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Ashish')
    FROM Skills skill
    WHERE skill.skill_name = 'Make a fake id';

    INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '12'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Ashish')
    FROM Skills skill
    WHERE skill.skill_name = 'Math homework';

    INSERT INTO Offereds
      (skillId, UserId)
  SELECT
    skill.id,
       (SELECT user.id
          FROM Users user
          WHERE user.name = 'Tali')
    FROM Skills skill
    WHERE skill.skill_name = 'Put birds on things';

    INSERT INTO Wanteds
        (skillId, OfferedId, UserId)
  SELECT
    skill.id,
      (SELECT offer.id
        FROM Offereds offer
        WHERE offer.Skillid = '4'),
      (SELECT user.id
        FROM Users user
        WHERE user.name = 'Tali')
    FROM Skills skill
    WHERE skill.skill_name = 'Social media manager';
