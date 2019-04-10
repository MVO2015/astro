
sed -e '/<!--INCLUDE clock.img -->/ {' -e 'r includes/clock.img' -e 'd' -e '}' templates/index.html > ../index.html
sed -e '/<!--INCLUDE clock.img -->/ {' -e 'r includes/clock.img' -e 'd' -e '}' templates/clock.html > ../clock.html