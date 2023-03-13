const quotes = [
    {
        "q": "A man sooner or later discovers that he is the master-gardener of his soul, the director of his life.",
        "a": "James Allen"
    },
    {
        "q": "Whenever people agree with me I always feel I must be wrong.",
        "a": "Oscar Wilde"
    },
    {
        "q": "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.",
        "a": "Roy T. Bennett"
    },
    {
        "q": "The eye with which I see God is the same eye with which God sees me.",
        "a": "Meister Eckhart"
    },
    {
        "q": "You cannot find peace avoiding life.",
        "a": "Virginia Woolf"
    },
    {
        "q": "Talk to someone about themselves and they'll listen for hours.",
        "a": "Dale Carnegie"
    },
    {
        "q": "Doubt is an uncomfortable condition, but certainty is a ridiculous one.",
        "a": "Voltaire"
    },
    {
        "q": "If your happiness depends on what somebody else does, I guess you do have a problem.",
        "a": "Richard Bach"
    },
    {
        "q": "Your past does not equal your future.",
        "a": "Tony Robbins"
    },
    {
        "q": "The older you get, the more you understand how your conscience works.",
        "a": "Criss Jami"
    },
    {
        "q": "The greatest of all mistakes is to do nothing because you think you can only do a little.  ",
        "a": "Zig Ziglar"
    },
    {
        "q": "Because of your smile, you make life more beautiful.",
        "a": "Thich Nhat Hanh"
    },
    {
        "q": "There are no shortcuts to any place worth going.",
        "a": "Beverly Sills"
    },
    {
        "q": "To raise your consciousness, surround yourself with people of higher consciousness.",
        "a": "Celestine Chua"
    },
    {
        "q": "Today is the oldest you've ever been, and the youngest you'll ever be again.",
        "a": "Eleanor Roosevelt"
    },
    {
        "q": "What worries you, masters you.",
        "a": "John Locke"
    },
    {
        "q": "Fear is your worst enemy. Risk is your best friend.",
        "a": "Gurbaksh Chahal"
    },
    {
        "q": "Your time is limited, so don't waste it living someone elses. life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
        "a": "Steve Jobs"
    },
    {
        "q": "What's right is what's left if you do everything else wrong.",
        "a": "Robin Williams"
    },
    {
        "q": "It's not whether you get knocked down, its whether you get back up.",
        "a": "Vince Lombardi"
    },
    {
        "q": "Meditate. It won't be fun but it will surface what you need to deal with.",
        "a": "Naval Ravikant"
    },
    {
        "q": "Our greatest glory is not in never falling, but in rising every time we fall. ",
        "a": "Confucius"
    },
    {
        "q": "Eighty percent of success is showing up. ",
        "a": "Woody Allen"
    },
    {
        "q": "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.",
        "a": "Amelia Earhart"
    },
    {
        "q": "Action is the foundational key to all success.",
        "a": "Pablo Picasso"
    },
    {
        "q": "The more tranquil a man becomes, the greater is his success, his influence, his power for good. Calmness of mind is one of the beautiful jewels of wisdom.",
        "a": "James Allen"
    },
    {
        "q": "Our joy does not have to be based on our circumstances.",
        "a": "Joyce Meyer"
    },
    {
        "q": "The ones who are crazy enough to think they can change the world, are the ones that do.",
        "a": "Steve Jobs"
    },
    {
        "q": "The whole world is a series of miracles, but we're so used to them we call them ordinary things.",
        "a": "Hans Christian Andersen"
    },
    {
        "q": "You give but little when you give of your possessions. It is when you give of yourself that you truly give.",
        "a": "Kahlil Gibran"
    },
    {
        "q": "Throughout this life, you can never be certain of living long enough to take another breath.",
        "a": "Zen Proverb"
    },
    {
        "q": "My guiding principle is this: Guilt is never to be doubted. ",
        "a": "Franz Kafka"
    },
    {
        "q": "The cost of leadership is self-interest.",
        "a": "Simon Sinek"
    },
    {
        "q": "Nothing external to you has any power over you.",
        "a": "Ralph Waldo Emerson"
    },
    {
        "q": "A simple rule in dealing with those who are hard to get along with is to remember that this person is striving to assert his superiority; and you must deal with him from that point of view.",
        "a": "Alfred Adler"
    },
    {
        "q": "Whatever your heart clings to and confides in, that is really your God.",
        "a": "Martin Luther"
    },
    {
        "q": "Deeds will not be less valiant because they are upraised.",
        "a": "J.R.R. Tolkien"
    },
    {
        "q": "Memory is the scribe of the soul.",
        "a": "Aristotle"
    },
    {
        "q": "A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.",
        "a": "Roy T. Bennett"
    },
    {
        "q": "You cannot control the behavior of others, but you can always choose how you respond to it.",
        "a": "Roy T. Bennett"
    },
    {
        "q": "Love is merely the name for the desire and pursuit of the whole.",
        "a": "Aristophanes"
    },
    {
        "q": "If you want work well done, select a busy man; the other kind has no time.",
        "a": "Elbert Hubbard"
    },
    {
        "q": "Words are the clothing of our thoughts.",
        "a": "Jonathan Swift"
    },
    {
        "q": "Let the beauty of what you love be what you do.",
        "a": "Rumi"
    },
    {
        "q": "Challenge yourself to find the good and beautiful thing inside of everyone.",
        "a": "Mark Manson"
    },
    {
        "q": "Action may not always bring happiness, but there is no happiness without action.",
        "a": "William James"
    },
    {
        "q": "The people who are crazy enough to think they can change the world are the ones who do.",
        "a": "Steve Jobs"
    },
    {
        "q": "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
        "a": "Winston Churchill"
    },
    {
        "q": "Work for something because it is good, not just because it stands a chance to succeed.",
        "a": "Vaclav Havel"
    },
    {
        "q": "The more you are grateful for what you have the more you will have to be grateful for.  ",
        "a": "Zig Ziglar"
    }
]
quoteIndex = Math.floor(Math.random()*quotes.length);
quote = quotes[quoteIndex].q;
auther = quotes[quoteIndex].a;

document.getElementById("quoteline").innerText = quote;
document.getElementById("auther").innerText = auther;


