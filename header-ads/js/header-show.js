;
(function (win) {
    function GradientText(text, font, color) {
        this.Text_constructor(text, font, color);
    }
    var p = createjs.extend(GradientText, createjs.Text);
    p._drawTextLine = function (ctx, text, y) {
        if (this.gradient) {
            var height = this.getMeasuredLineHeight();
            var my_gradient = ctx.createLinearGradient(0, y, 0, y + height);
            my_gradient.addColorStop(0, "#faef79");
            my_gradient.addColorStop(.4, "#a9841b");
            my_gradient.addColorStop(1, "#faef79");

            ctx.fillStyle = my_gradient;
            ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
        } else {
            this.Text__drawTextLine(ctx, text, y);
        }
    };
    createjs.GradientText = createjs.promote(GradientText, "Text");


    var particals_part1 = [{ x: 701, y: 51 }, { x: 711, y: 51 }, { x: 721, y: 51 }, { x: 731, y: 51 }, { x: 741, y: 51 }, { x: 761, y: 51 }, { x: 771, y: 51 }, { x: 781, y: 51 }, { x: 791, y: 51 }, { x: 801, y: 51 }, { x: 821, y: 51 }, { x: 831, y: 51 }, { x: 841, y: 51 }, { x: 881, y: 51 }, { x: 941, y: 51 }, { x: 951, y: 51 }, { x: 961, y: 51 }, { x: 971, y: 51 }, { x: 981, y: 51 }, { x: 1011, y: 51 }, { x: 1061, y: 51 }, { x: 1101, y: 51 }, { x: 1121, y: 51 }, { x: 1131, y: 51 }, { x: 1161, y: 51 }, { x: 1181, y: 51 }, { x: 1191, y: 51 }, { x: 791, y: 61 }, { x: 831, y: 61 }, { x: 841, y: 61 }, { x: 881, y: 61 }, { x: 891, y: 61 }, { x: 911, y: 61 }, { x: 921, y: 61 }, { x: 951, y: 61 }, { x: 1001, y: 61 }, { x: 1031, y: 61 }, { x: 1041, y: 61 }, { x: 1061, y: 61 }, { x: 1081, y: 61 }, { x: 1101, y: 61 }, { x: 1131, y: 61 }, { x: 1141, y: 61 }, { x: 1161, y: 61 }, { x: 701, y: 71 }, { x: 721, y: 71 }, { x: 741, y: 71 }, { x: 761, y: 71 }, { x: 771, y: 71 }, { x: 781, y: 71 }, { x: 791, y: 71 }, { x: 801, y: 71 }, { x: 831, y: 71 }, { x: 841, y: 71 }, { x: 881, y: 71 }, { x: 951, y: 71 }, { x: 981, y: 71 }, { x: 1011, y: 71 }, { x: 1031, y: 71 }, { x: 1061, y: 71 }, { x: 1131, y: 71 }, { x: 1141, y: 71 }, { x: 1151, y: 71 }, { x: 1161, y: 71 }, { x: 701, y: 81 }, { x: 761, y: 81 }, { x: 791, y: 81 }, { x: 821, y: 81 }, { x: 831, y: 81 }, { x: 841, y: 81 }, { x: 881, y: 81 }, { x: 941, y: 81 }, { x: 961, y: 81 }, { x: 971, y: 81 }, { x: 1011, y: 81 }, { x: 1031, y: 81 }, { x: 1081, y: 81 }, { x: 1101, y: 81 }, { x: 1121, y: 81 }, { x: 1131, y: 81 }, { x: 1141, y: 81 }, { x: 1151, y: 81 }, { x: 701, y: 91 }, { x: 761, y: 91 }, { x: 771, y: 91 }, { x: 781, y: 91 }, { x: 791, y: 91 }, { x: 801, y: 91 }, { x: 901, y: 91 }, { x: 961, y: 91 }, { x: 971, y: 91 }, { x: 1001, y: 91 }, { x: 1031, y: 91 }, { x: 1061, y: 91 }, { x: 1071, y: 91 }, { x: 1081, y: 91 }, { x: 1101, y: 91 }, { x: 1161, y: 91 }, { x: 1181, y: 91 }, { x: 1111, y: 111 }, { x: 1291, y: 111 }, { x: 491, y: 121 }, { x: 501, y: 121 }, { x: 511, y: 121 }, { x: 521, y: 121 }, { x: 531, y: 121 }, { x: 551, y: 121 }, { x: 561, y: 121 }, { x: 571, y: 121 }, { x: 581, y: 121 }, { x: 591, y: 121 }, { x: 611, y: 121 }, { x: 621, y: 121 }, { x: 631, y: 121 }, { x: 691, y: 121 }, { x: 701, y: 121 }, { x: 711, y: 121 }, { x: 751, y: 121 }, { x: 791, y: 121 }, { x: 801, y: 121 }, { x: 811, y: 121 }, { x: 851, y: 121 }, { x: 881, y: 121 }, { x: 911, y: 121 }, { x: 921, y: 121 }, { x: 931, y: 121 }, { x: 941, y: 121 }, { x: 951, y: 121 }, { x: 1011, y: 121 }, { x: 1031, y: 121 }, { x: 1041, y: 121 }, { x: 1061, y: 121 }, { x: 1071, y: 121 }, { x: 1081, y: 121 }, { x: 1091, y: 121 }, { x: 1101, y: 121 }, { x: 1111, y: 121 }, { x: 1121, y: 121 }, { x: 1131, y: 121 }, { x: 1161, y: 121 }, { x: 1181, y: 121 }, { x: 1231, y: 121 }, { x: 1271, y: 121 }, { x: 1281, y: 121 }, { x: 1291, y: 121 }, { x: 1301, y: 121 }, { x: 1311, y: 121 }, { x: 1331, y: 121 }, { x: 1341, y: 121 }, { x: 1371, y: 121 }, { x: 1391, y: 121 }, { x: 1401, y: 121 }, { x: 581, y: 131 }, { x: 621, y: 131 }, { x: 631, y: 131 }, { x: 671, y: 131 }, { x: 681, y: 131 }, { x: 691, y: 131 }, { x: 701, y: 131 }, { x: 711, y: 131 }, { x: 751, y: 131 }, { x: 801, y: 131 }, { x: 821, y: 131 }, { x: 831, y: 131 }, { x: 861, y: 131 }, { x: 911, y: 131 }, { x: 951, y: 131 }, { x: 1011, y: 131 }, { x: 1041, y: 131 }, { x: 1051, y: 131 }, { x: 1091, y: 131 }, { x: 1141, y: 131 }, { x: 1151, y: 131 }, { x: 1161, y: 131 }, { x: 1171, y: 131 }, { x: 1181, y: 131 }, { x: 1191, y: 131 }, { x: 1231, y: 131 }, { x: 1251, y: 131 }, { x: 1271, y: 131 }, { x: 1281, y: 131 }, { x: 1291, y: 131 }, { x: 1311, y: 131 }, { x: 1341, y: 131 }, { x: 1351, y: 131 }, { x: 1371, y: 131 }, { x: 491, y: 141 }, { x: 511, y: 141 }, { x: 531, y: 141 }, { x: 551, y: 141 }, { x: 561, y: 141 }, { x: 571, y: 141 }, { x: 581, y: 141 }, { x: 591, y: 141 }, { x: 621, y: 141 }, { x: 631, y: 141 }, { x: 701, y: 141 }, { x: 711, y: 141 }, { x: 801, y: 141 }, { x: 821, y: 141 }, { x: 861, y: 141 }, { x: 881, y: 141 }, { x: 891, y: 141 }, { x: 911, y: 141 }, { x: 951, y: 141 }, { x: 971, y: 141 }, { x: 1011, y: 141 }, { x: 1031, y: 141 }, { x: 1041, y: 141 }, { x: 1061, y: 141 }, { x: 1091, y: 141 }, { x: 1101, y: 141 }, { x: 1111, y: 141 }, { x: 1121, y: 141 }, { x: 1131, y: 141 }, { x: 1151, y: 141 }, { x: 1161, y: 141 }, { x: 1181, y: 141 }, { x: 1191, y: 141 }, { x: 1231, y: 141 }, { x: 1251, y: 141 }, { x: 1271, y: 141 }, { x: 1281, y: 141 }, { x: 1301, y: 141 }, { x: 1311, y: 141 }, { x: 1341, y: 141 }, { x: 1351, y: 141 }, { x: 1361, y: 141 }, { x: 1371, y: 141 }, { x: 491, y: 151 }, { x: 551, y: 151 }, { x: 581, y: 151 }, { x: 611, y: 151 }, { x: 621, y: 151 }, { x: 631, y: 151 }, { x: 691, y: 151 }, { x: 701, y: 151 }, { x: 711, y: 151 }, { x: 741, y: 151 }, { x: 761, y: 151 }, { x: 791, y: 151 }, { x: 801, y: 151 }, { x: 821, y: 151 }, { x: 851, y: 151 }, { x: 861, y: 151 }, { x: 871, y: 151 }, { x: 911, y: 151 }, { x: 921, y: 151 }, { x: 931, y: 151 }, { x: 941, y: 151 }, { x: 951, y: 151 }, { x: 971, y: 151 }, { x: 1041, y: 151 }, { x: 1071, y: 151 }, { x: 1101, y: 151 }, { x: 1111, y: 151 }, { x: 1121, y: 151 }, { x: 1151, y: 151 }, { x: 1191, y: 151 }, { x: 1231, y: 151 }, { x: 1251, y: 151 }, { x: 1291, y: 151 }, { x: 1331, y: 151 }, { x: 1341, y: 151 }, { x: 1351, y: 151 }, { x: 1361, y: 151 }, { x: 491, y: 161 }, { x: 551, y: 161 }, { x: 561, y: 161 }, { x: 571, y: 161 }, { x: 581, y: 161 }, { x: 591, y: 161 }, { x: 671, y: 161 }, { x: 691, y: 161 }, { x: 711, y: 161 }, { x: 731, y: 161 }, { x: 771, y: 161 }, { x: 811, y: 161 }, { x: 831, y: 161 }, { x: 861, y: 161 }, { x: 911, y: 161 }, { x: 951, y: 161 }, { x: 971, y: 161 }, { x: 1011, y: 161 }, { x: 1031, y: 161 }, { x: 1041, y: 161 }, { x: 1071, y: 161 }, { x: 1101, y: 161 }, { x: 1111, y: 161 }, { x: 1121, y: 161 }, { x: 1151, y: 161 }, { x: 1181, y: 161 }, { x: 1191, y: 161 }, { x: 1231, y: 161 }, { x: 1291, y: 161 }, { x: 1371, y: 161 }, { x: 1391, y: 161 }, { x: 1191, y: 181 }, { x: 531, y: 191 }, { x: 591, y: 191 }, { x: 611, y: 191 }, { x: 651, y: 191 }, { x: 751, y: 191 }, { x: 761, y: 191 }, { x: 771, y: 191 }, { x: 781, y: 191 }, { x: 801, y: 191 }, { x: 871, y: 191 }, { x: 881, y: 191 }, { x: 1031, y: 191 }, { x: 1041, y: 191 }, { x: 1051, y: 191 }, { x: 1061, y: 191 }, { x: 1071, y: 191 }, { x: 1081, y: 191 }, { x: 1091, y: 191 }, { x: 1101, y: 191 }, { x: 1201, y: 191 }, { x: 1221, y: 191 }, { x: 1231, y: 191 }, { x: 1251, y: 191 }, { x: 1291, y: 191 }, { x: 1311, y: 191 }, { x: 1321, y: 191 }, { x: 1331, y: 191 }, { x: 1341, y: 191 }, { x: 1351, y: 191 }, { x: 1371, y: 191 }, { x: 1441, y: 191 }, { x: 531, y: 201 }, { x: 571, y: 201 }, { x: 581, y: 201 }, { x: 601, y: 201 }, { x: 631, y: 201 }, { x: 651, y: 201 }, { x: 761, y: 201 }, { x: 771, y: 201 }, { x: 801, y: 201 }, { x: 811, y: 201 }, { x: 841, y: 201 }, { x: 851, y: 201 }, { x: 901, y: 201 }, { x: 1021, y: 201 }, { x: 1031, y: 201 }, { x: 1041, y: 201 }, { x: 1051, y: 201 }, { x: 1071, y: 201 }, { x: 1081, y: 201 }, { x: 1091, y: 201 }, { x: 1101, y: 201 }, { x: 1231, y: 201 }, { x: 1251, y: 201 }, { x: 1271, y: 201 }, { x: 1281, y: 201 }, { x: 1291, y: 201 }, { x: 1311, y: 201 }, { x: 1321, y: 201 }, { x: 1331, y: 201 }, { x: 1341, y: 201 }, { x: 1351, y: 201 }, { x: 1441, y: 201 }, { x: 451, y: 211 }, { x: 461, y: 211 }, { x: 471, y: 211 }, { x: 481, y: 211 }, { x: 491, y: 211 }, { x: 501, y: 211 }, { x: 511, y: 211 }, { x: 521, y: 211 }, { x: 531, y: 211 }, { x: 541, y: 211 }, { x: 551, y: 211 }, { x: 561, y: 211 }, { x: 571, y: 211 }, { x: 581, y: 211 }, { x: 591, y: 211 }, { x: 631, y: 211 }, { x: 651, y: 211 }, { x: 761, y: 211 }, { x: 771, y: 211 }, { x: 791, y: 211 }, { x: 811, y: 211 }, { x: 841, y: 211 }, { x: 851, y: 211 }, { x: 871, y: 211 }, { x: 901, y: 211 }, { x: 1021, y: 211 }, { x: 1031, y: 211 }, { x: 1041, y: 211 }, { x: 1051, y: 211 }, { x: 1071, y: 211 }, { x: 1101, y: 211 }, { x: 1111, y: 211 }, { x: 1251, y: 211 }, { x: 1261, y: 211 }, { x: 1291, y: 211 }, { x: 1301, y: 211 }, { x: 1311, y: 211 }, { x: 1321, y: 211 }, { x: 1331, y: 211 }, { x: 1341, y: 211 }, { x: 1351, y: 211 }, { x: 1391, y: 211 }, { x: 1401, y: 211 }, { x: 1411, y: 211 }, { x: 1431, y: 211 }, { x: 511, y: 221 }, { x: 531, y: 221 }, { x: 551, y: 221 }, { x: 581, y: 221 }, { x: 611, y: 221 }, { x: 631, y: 221 }, { x: 651, y: 221 }, { x: 751, y: 221 }, { x: 761, y: 221 }, { x: 771, y: 221 }, { x: 781, y: 221 }, { x: 851, y: 221 }, { x: 881, y: 221 }, { x: 901, y: 221 }, { x: 1021, y: 221 }, { x: 1031, y: 221 }, { x: 1041, y: 221 }, { x: 1051, y: 221 }, { x: 1071, y: 221 }, { x: 1091, y: 221 }, { x: 1101, y: 221 }, { x: 1111, y: 221 }, { x: 1221, y: 221 }, { x: 1241, y: 221 }, { x: 1251, y: 221 }, { x: 1291, y: 221 }, { x: 1311, y: 221 }, { x: 1321, y: 221 }, { x: 1331, y: 221 }, { x: 1341, y: 221 }, { x: 1351, y: 221 }, { x: 1371, y: 221 }, { x: 1381, y: 221 }, { x: 1391, y: 221 }, { x: 1401, y: 221 }, { x: 1411, y: 221 }, { x: 511, y: 231 }, { x: 531, y: 231 }, { x: 551, y: 231 }, { x: 571, y: 231 }, { x: 581, y: 231 }, { x: 611, y: 231 }, { x: 651, y: 231 }, { x: 751, y: 231 }, { x: 761, y: 231 }, { x: 781, y: 231 }, { x: 801, y: 231 }, { x: 821, y: 231 }, { x: 841, y: 231 }, { x: 851, y: 231 }, { x: 881, y: 231 }, { x: 971, y: 231 }, { x: 1031, y: 231 }, { x: 1041, y: 231 }, { x: 1061, y: 231 }, { x: 1091, y: 231 }, { x: 1111, y: 231 }, { x: 1131, y: 231 }, { x: 1231, y: 231 }, { x: 1251, y: 231 }, { x: 1271, y: 231 }, { x: 1281, y: 231 }, { x: 1291, y: 231 }, { x: 1311, y: 231 }, { x: 1321, y: 231 }, { x: 1351, y: 231 }, { x: 1411, y: 231 }, { x: 1431, y: 231 }],
        particals_part2 = [{ x: 255, y: 141 }, { x: 257, y: 141 }, { x: 259, y: 141 }, { x: 251, y: 143 }, { x: 253, y: 143 }, { x: 255, y: 143 }, { x: 257, y: 143 }, { x: 259, y: 143 }, { x: 245, y: 145 }, { x: 247, y: 145 }, { x: 249, y: 145 }, { x: 251, y: 145 }, { x: 253, y: 145 }, { x: 255, y: 145 }, { x: 257, y: 145 }, { x: 259, y: 145 }, { x: 241, y: 147 }, { x: 243, y: 147 }, { x: 245, y: 147 }, { x: 247, y: 147 }, { x: 249, y: 147 }, { x: 251, y: 147 }, { x: 253, y: 147 }, { x: 255, y: 147 }, { x: 257, y: 147 }, { x: 259, y: 147 }, { x: 261, y: 147 }, { x: 235, y: 149 }, { x: 237, y: 149 }, { x: 239, y: 149 }, { x: 241, y: 149 }, { x: 243, y: 149 }, { x: 245, y: 149 }, { x: 247, y: 149 }, { x: 249, y: 149 }, { x: 251, y: 149 }, { x: 257, y: 149 }, { x: 259, y: 149 }, { x: 261, y: 149 }, { x: 231, y: 151 }, { x: 233, y: 151 }, { x: 235, y: 151 }, { x: 237, y: 151 }, { x: 239, y: 151 }, { x: 241, y: 151 }, { x: 243, y: 151 }, { x: 245, y: 151 }, { x: 247, y: 151 }, { x: 249, y: 151 }, { x: 251, y: 151 }, { x: 253, y: 151 }, { x: 257, y: 151 }, { x: 259, y: 151 }, { x: 261, y: 151 }, { x: 263, y: 151 }, { x: 231, y: 153 }, { x: 233, y: 153 }, { x: 235, y: 153 }, { x: 237, y: 153 }, { x: 239, y: 153 }, { x: 241, y: 153 }, { x: 243, y: 153 }, { x: 245, y: 153 }, { x: 247, y: 153 }, { x: 249, y: 153 }, { x: 251, y: 153 }, { x: 253, y: 153 }, { x: 257, y: 153 }, { x: 259, y: 153 }, { x: 261, y: 153 }, { x: 263, y: 153 }, { x: 233, y: 155 }, { x: 237, y: 155 }, { x: 241, y: 155 }, { x: 243, y: 155 }, { x: 245, y: 155 }, { x: 247, y: 155 }, { x: 249, y: 155 }, { x: 251, y: 155 }, { x: 253, y: 155 }, { x: 255, y: 155 }, { x: 257, y: 155 }, { x: 259, y: 155 }, { x: 261, y: 155 }, { x: 263, y: 155 }, { x: 265, y: 155 }, { x: 233, y: 157 }, { x: 235, y: 157 }, { x: 237, y: 157 }, { x: 239, y: 157 }, { x: 243, y: 157 }, { x: 245, y: 157 }, { x: 247, y: 157 }, { x: 249, y: 157 }, { x: 251, y: 157 }, { x: 253, y: 157 }, { x: 255, y: 157 }, { x: 257, y: 157 }, { x: 259, y: 157 }, { x: 261, y: 157 }, { x: 263, y: 157 }, { x: 265, y: 157 }, { x: 235, y: 159 }, { x: 237, y: 159 }, { x: 239, y: 159 }, { x: 243, y: 159 }, { x: 245, y: 159 }, { x: 247, y: 159 }, { x: 249, y: 159 }, { x: 251, y: 159 }, { x: 253, y: 159 }, { x: 255, y: 159 }, { x: 257, y: 159 }, { x: 259, y: 159 }, { x: 261, y: 159 }, { x: 263, y: 159 }, { x: 265, y: 159 }, { x: 235, y: 161 }, { x: 237, y: 161 }, { x: 239, y: 161 }, { x: 241, y: 161 }, { x: 243, y: 161 }, { x: 245, y: 161 }, { x: 247, y: 161 }, { x: 249, y: 161 }, { x: 255, y: 161 }, { x: 257, y: 161 }, { x: 259, y: 161 }, { x: 261, y: 161 }, { x: 263, y: 161 }, { x: 265, y: 161 }, { x: 267, y: 161 }, { x: 237, y: 163 }, { x: 239, y: 163 }, { x: 241, y: 163 }, { x: 243, y: 163 }, { x: 245, y: 163 }, { x: 247, y: 163 }, { x: 249, y: 163 }, { x: 251, y: 163 }, { x: 255, y: 163 }, { x: 257, y: 163 }, { x: 259, y: 163 }, { x: 261, y: 163 }, { x: 263, y: 163 }, { x: 265, y: 163 }, { x: 267, y: 163 }, { x: 239, y: 165 }, { x: 241, y: 165 }, { x: 243, y: 165 }, { x: 245, y: 165 }, { x: 247, y: 165 }, { x: 249, y: 165 }, { x: 251, y: 165 }, { x: 255, y: 165 }, { x: 257, y: 165 }, { x: 259, y: 165 }, { x: 263, y: 165 }, { x: 265, y: 165 }, { x: 267, y: 165 }, { x: 269, y: 165 }, { x: 241, y: 167 }, { x: 243, y: 167 }, { x: 245, y: 167 }, { x: 247, y: 167 }, { x: 249, y: 167 }, { x: 251, y: 167 }, { x: 253, y: 167 }, { x: 255, y: 167 }, { x: 257, y: 167 }, { x: 259, y: 167 }, { x: 261, y: 167 }, { x: 263, y: 167 }, { x: 265, y: 167 }, { x: 267, y: 167 }, { x: 269, y: 167 }, { x: 241, y: 169 }, { x: 243, y: 169 }, { x: 245, y: 169 }, { x: 247, y: 169 }, { x: 249, y: 169 }, { x: 251, y: 169 }, { x: 253, y: 169 }, { x: 255, y: 169 }, { x: 257, y: 169 }, { x: 259, y: 169 }, { x: 261, y: 169 }, { x: 263, y: 169 }, { x: 265, y: 169 }, { x: 267, y: 169 }, { x: 241, y: 171 }, { x: 243, y: 171 }, { x: 245, y: 171 }, { x: 249, y: 171 }, { x: 251, y: 171 }, { x: 253, y: 171 }, { x: 255, y: 171 }, { x: 257, y: 171 }, { x: 259, y: 171 }, { x: 263, y: 171 }, { x: 241, y: 173 }, { x: 243, y: 173 }, { x: 245, y: 173 }, { x: 247, y: 173 }, { x: 249, y: 173 }, { x: 251, y: 173 }, { x: 253, y: 173 }, { x: 255, y: 173 }, { x: 239, y: 175 }, { x: 241, y: 175 }, { x: 243, y: 175 }, { x: 245, y: 175 }, { x: 249, y: 175 }, { x: 251, y: 175 }, { x: 253, y: 175 }, { x: 241, y: 177 }, { x: 243, y: 177 }, { x: 245, y: 177 }, { x: 271, y: 179 }, { x: 273, y: 179 }, { x: 269, y: 181 }, { x: 271, y: 181 }, { x: 273, y: 181 }, { x: 275, y: 181 }, { x: 259, y: 183 }, { x: 261, y: 183 }, { x: 263, y: 183 }, { x: 271, y: 183 }, { x: 273, y: 183 }, { x: 275, y: 183 }, { x: 259, y: 185 }, { x: 261, y: 185 }, { x: 263, y: 185 }, { x: 265, y: 185 }, { x: 271, y: 185 }, { x: 273, y: 185 }, { x: 275, y: 185 }, { x: 277, y: 185 }, { x: 259, y: 187 }, { x: 261, y: 187 }, { x: 263, y: 187 }, { x: 265, y: 187 }, { x: 271, y: 187 }, { x: 273, y: 187 }, { x: 275, y: 187 }, { x: 277, y: 187 }, { x: 249, y: 189 }, { x: 251, y: 189 }, { x: 253, y: 189 }, { x: 261, y: 189 }, { x: 263, y: 189 }, { x: 265, y: 189 }, { x: 273, y: 189 }, { x: 275, y: 189 }, { x: 277, y: 189 }, { x: 249, y: 191 }, { x: 251, y: 191 }, { x: 253, y: 191 }, { x: 255, y: 191 }, { x: 261, y: 191 }, { x: 263, y: 191 }, { x: 265, y: 191 }, { x: 267, y: 191 }, { x: 273, y: 191 }, { x: 275, y: 191 }, { x: 277, y: 191 }, { x: 279, y: 191 }, { x: 251, y: 193 }, { x: 253, y: 193 }, { x: 255, y: 193 }, { x: 263, y: 193 }, { x: 265, y: 193 }, { x: 267, y: 193 }, { x: 275, y: 193 }, { x: 277, y: 193 }, { x: 279, y: 193 }, { x: 251, y: 195 }, { x: 253, y: 195 }, { x: 255, y: 195 }, { x: 257, y: 195 }, { x: 263, y: 195 }, { x: 265, y: 195 }, { x: 267, y: 195 }, { x: 269, y: 195 }, { x: 275, y: 195 }, { x: 277, y: 195 }, { x: 279, y: 195 }, { x: 281, y: 195 }, { x: 253, y: 197 }, { x: 255, y: 197 }, { x: 257, y: 197 }, { x: 265, y: 197 }, { x: 267, y: 197 }, { x: 269, y: 197 }, { x: 277, y: 197 }, { x: 279, y: 197 }, { x: 281, y: 197 }, { x: 253, y: 199 }, { x: 255, y: 199 }, { x: 257, y: 199 }, { x: 259, y: 199 }, { x: 265, y: 199 }, { x: 267, y: 199 }, { x: 269, y: 199 }, { x: 271, y: 199 }, { x: 277, y: 199 }, { x: 279, y: 199 }, { x: 281, y: 199 }, { x: 283, y: 199 }, { x: 255, y: 201 }, { x: 257, y: 201 }, { x: 259, y: 201 }, { x: 267, y: 201 }, { x: 269, y: 201 }, { x: 271, y: 201 }, { x: 279, y: 201 }, { x: 281, y: 201 }, { x: 283, y: 201 }, { x: 255, y: 203 }, { x: 257, y: 203 }, { x: 259, y: 203 }, { x: 261, y: 203 }, { x: 267, y: 203 }, { x: 269, y: 203 }, { x: 271, y: 203 }, { x: 273, y: 203 }, { x: 275, y: 203 }, { x: 277, y: 203 }, { x: 279, y: 203 }, { x: 281, y: 203 }, { x: 283, y: 203 }, { x: 255, y: 205 }, { x: 257, y: 205 }, { x: 259, y: 205 }, { x: 261, y: 205 }, { x: 267, y: 205 }, { x: 269, y: 205 }, { x: 271, y: 205 }, { x: 273, y: 205 }, { x: 275, y: 205 }, { x: 277, y: 205 }, { x: 279, y: 205 }, { x: 281, y: 205 }, { x: 257, y: 207 }, { x: 259, y: 207 }, { x: 261, y: 207 }, { x: 265, y: 207 }, { x: 267, y: 207 }, { x: 269, y: 207 }, { x: 271, y: 207 }, { x: 273, y: 207 }, { x: 275, y: 207 }, { x: 277, y: 207 }, { x: 257, y: 209 }, { x: 259, y: 209 }, { x: 261, y: 209 }, { x: 263, y: 209 }, { x: 265, y: 209 }, { x: 267, y: 209 }, { x: 269, y: 209 }, { x: 271, y: 209 }, { x: 273, y: 209 }, { x: 259, y: 211 }, { x: 261, y: 211 }, { x: 263, y: 211 }, { x: 265, y: 211 }, { x: 267, y: 211 }, { x: 259, y: 213 }, { x: 261, y: 213 }, { x: 263, y: 213 }],
        header_show = {
            part1: particals_part1,
            part2: particals_part2,
            prevTexts: [{
                str: "还在听朋友介绍吗？",
                y: 30
            },
            {
                str: "还在听别人吹嘘自己的高命中率吗？",
                y: 100
            },
            {
                str: "一击必中，3次必中，40%，能相信吗？",
                y: 170
            }
            ],
            lastText: {
                str: ["用", "自己", "的眼睛，找", "靠谱", "的代拍！"],
                y: 120
            },
            stage: new createjs.Stage("stage"),
            stageW: 0,
            stageH: 0,
            mjolnir: null,
            cracked: null,
            particals: null,
            tick: function (event) {
                if (event.paused) {
                    return false;
                }
                this.stage.update();
            },
            run: function () {
                // createjs.Ticker.reset();
                createjs.Ticker.setFPS(60);
                createjs.Ticker.paused = false;
                createjs.Ticker.on("tick", this.tick.bind(this));
            },
            stop: function () {
                createjs.Ticker.paused = true;
                createjs.Ticker.off("tick", this.tick.bind(this));
            },
            init: function () {
                this.stageW = this.stage.canvas.width;
                this.stageH = this.stage.canvas.height;

                this.createCracked();
                this.createPrevTxts();
                this.createMjolnir();
                this.createParticals();
                this.createLastTxt();

                this.run();

                return this;
            },
            start: function () {

                this.prevTextsComing();
            },
            createPrevTxts: function () {
                var count = 0;
                this.prevTexts = this.prevTexts.map(function (txt, idx) {
                    var tw;
                    var drawed = new createjs.Text(txt.str, "60px jdzhonyuanjian15117c27c51e4a0", "#8B8B8B");
                    var txtBounds = drawed.getBounds();

                    drawed.regX = txtBounds.width / 2;
                    drawed.regY = 0;
                    drawed.alpha = 0;
                    drawed.y = txt.y;

                    this.stage.addChild(drawed);

                    switch (idx) {
                        case 0:
                            drawed.x = -this.stageW;
                            break;
                        case 1:
                            drawed.x = this.stageW;
                            break;
                        case 2:
                            drawed.x = this.stageW / 2;
                            drawed.y = this.stageH;
                            break;
                    }
                    tw = createjs.Tween.get(drawed).setPaused(true).wait(idx * 1000).to({
                        x: this.stageW / 2,
                        y: txt.y,
                        alpha: 1,
                    }, 1000, createjs.Ease.getPowOut(3)).call(function () {
                        count++;
                        if (count === 3) {

                            this.mjolnirComing();
                        }
                    }.bind(this));

                    return Object.assign(txt, { drawed: drawed, tw: tw });

                }.bind(this));

                return this;
            },
            createLastTxt: function () {
                var container = new createjs.Container(),
                    tw, temp = [];
                var drawed = this.lastText.str.map(function (str, idx) {
                    var text;
                    if (idx % 2) {
                        text = new createjs.GradientText(str, "100px JQCuY15117b2e611e4a0", "#f1b80c");
                        text.shadow = new createjs.Shadow("#FFFECA", 0, 0, 300);
                        createjs.Tween.get(text.shadow, { loop: -1 })
                            .to({ blur: 200 }, 600, createjs.Ease.linear)
                            .to({ blur: 300 }, 600, createjs.Ease.linear);
                        createjs.Tween.get(text, { loop: -1 })
                            .to({ scaleX: 1.1, scaleY: 1.1 }, Math.random() * (idx * 100) + 1000, createjs.Ease.linear)
                            .to({ scaleX: 1, scaleY: 1 }, Math.random() * (idx * 100) + 1000, createjs.Ease.linear)
                    } else {
                        text = new createjs.GradientText(str, "80px JQCuY15117b2e611e4a0", "#f1b80c");
                    }
                    text.gradient = true;
                    text.regX = text.getBounds().width / 2;
                    text.regY = text.getBounds().height / 2;
                    if (!temp.length) {
                        text.x = text.regX;
                    } else {
                        text.x = temp[idx - 1].x + temp[idx - 1].w / 2 + text.regX + 10;
                    }
                    temp.push({ x: text.x, w: text.getBounds().width });
                    container.addChild(text);
                    return text;
                }.bind(this));
                temp = null;

                container.regX = container.getBounds().width / 2;
                container.x = this.stageW / 2 + 100;
                container.y = -this.stageH;
                this.stage.addChild(container);

                tw = createjs.Tween.get(container, {
                    // onChange: function() {
                    // }.bind(this)
                }).setPaused(true).to({
                    // x: this.stageW / 2,
                    y: this.stageH / 2,
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 1000, createjs.Ease.bounceOut).call(function () {
                    // 倾斜
                    // createjs.Tween.get(drawed).to({
                    //     rotation: 8
                    // }, 1000, createjs.Ease.bounceInOut)
                }.bind(this));

                this.lastText = Object.assign(this.lastText, { drawed: container, tw: tw });

            },
            createMjolnir: function () {
                var img = new Image();
                img.src = 'header-ads/imgs/mjolnir-2.png';

                this.mjolnir = new createjs.Container();
                var mjolnir = new createjs.Bitmap("header-ads/imgs/mjolnir.png");

                var yu = new createjs.GradientText("羽", "32px hdjxyt15156e62ba1e4a0", "#efdf6c");
                var shan = new createjs.GradientText("山", "30px hdjxyt15156e62ba1e4a0", "#efdf6c");
                yu.regX = yu.getBounds().width / 2;
                yu.regY = yu.getBounds().height / 2;
                shan.regX = shan.getBounds().width / 2;
                shan.regY = shan.getBounds().height / 2;
                yu.rotation = 28;
                shan.rotation = 26;
                yu.x = 65 + 8;
                yu.y = 20 + 24;
                shan.x = 48 + 8;
                shan.y = 56 + 24;
                yu.alpha = shan.alpha = 0;
                yu.scaleX = yu.scaleY = shan.scaleX = shan.scaleY = 10;

                yu.shadow = shan.shadow = new createjs.Shadow("#F50000", 0, 0, 100);
                createjs.Tween.get(yu.shadow, { loop: -1 })
                    .to({ blur: 50 }, 800, createjs.Ease.linear)
                    .to({ blur: 100 }, 800, createjs.Ease.linear);
                createjs.Tween.get(shan.shadow, { loop: -1 })
                    .wait(500)
                    .to({ blur: 50 }, 800, createjs.Ease.linear)
                    .to({ blur: 100 }, 800, createjs.Ease.linear);
                this.mjolnir.addChild(mjolnir, yu, shan);

                this.mjolnir.x = this.stageW + 800;
                this.mjolnir.y = 0;
                mjolnir.image.onload = function () {

                    this.mjolnir.regX = mjolnir.image.width / 2;
                    this.mjolnir.regY = mjolnir.image.height / 2;

                    this.mjolnir.rotation = 1000;
                    this.mjolnir.tw = createjs.Tween.get(this.mjolnir, {
                        onChange: function () {
                            if (this.exploded && this.cracke_started) {
                                return;
                            }
                            if (this.mjolnir.x < 1200 && !this.exploded) {
                                this.explode();
                            }
                            if (this.mjolnir.x < 1000 && !this.cracke_started) {
                                this.crackComing();
                            }
                        }.bind(this),
                    }).setPaused(true).to({
                        x: 300,
                        y: mjolnir.image.height,
                        rotation: -50,
                        // alpha: 1
                    }, 1800, createjs.Ease.bounceIn).call(function () {
                        // this.crackComing();
                        mjolnir.image = img;
                    }.bind(this));
                }.bind(this)

                this.stage.addChild(this.mjolnir);
            },
            prevTextsComing: function () {
                this.prevTexts.forEach(function (txt, idx) {
                    if (txt.tw) txt.tw.setPaused(false);
                });
            },
            mjolnirComing: function () {
                this.mjolnir.tw.setPaused(false);
            },
            exploded: false,
            explode: function () {
                this.exploded = true;

                this.prevTexts.forEach(function (txt, idx) {
                    txt.drawed.alpha = 0;
                });
                this.particals.forEach(function (item, idx) {
                    item.p.alpha = 1;

                    if (item.tw) item.tw.setPaused(false);
                });
            },
            createParticals: function () {
                this.particals = [];
                var count = 0;
                this.part1.forEach(function (item, index) {
                    var point = new createjs.Shape();
                    point.graphics.beginFill("#8B8B8B").drawCircle(0, 0, 1, 1).endFill();
                    point.x = item.x;
                    point.y = item.y;
                    point.alpha = 0;
                    var scale = Math.random() * 4 + 1;
                    var tw = createjs.Tween.get(point, {}).setPaused(true).to({
                        x: item.x + (Math.random() < 0.5 ? Math.random() * (-2000) : Math.random() * 2000),
                        y: item.y + (Math.random() < 0.5 ? Math.random() * (-300) : Math.random() * 300),
                        scaleX: scale,
                        scaleY: scale,
                    }, Math.random() * 1000, createjs.Ease.quartOut)
                        .call(function () {
                            count++;
                            this.collect(count, point);
                        }.bind(this));

                    this.particals.push({ p: point, tw: tw });

                    this.stage.addChild(point);

                }, this);

            },
            createCracked: function () {
                // 地面裂纹
                this.cracked = new createjs.Bitmap("header-ads/imgs/cracked.png");
                this.cracked.regX = 0;
                this.cracked.regY = 0;
                this.cracked.alpha = 0;
                this.cracked.x = 80;
                this.cracked.y = this.stageH - 90;

                // 遮罩
                var shape = new createjs.Shape();
                shape.graphics.beginFill("#f7f5f9").drawRect(0, 0, 350, 350);
                shape.x = 100;
                shape.y = this.stageH - 160;

                this.stage.addChild(this.cracked);
                this.stage.addChild(shape);

                // 关闭遮罩
                this.cracked.tw1 = createjs.Tween.get(shape).setPaused(true).to({
                    scaleY: 0,
                }, 1000, createjs.Ease.sineOut)
                    .call(function () {
                    }.bind(this));
                // 显示裂纹
                this.cracked.tw2 = createjs.Tween.get(this.cracked).setPaused(true).to({
                    alpha: 1,
                }, 1000, createjs.Ease.bounceInOut)
                    .call(function () {
                    }.bind(this));
                //     this.cracked.image.onload = function() {
                //     }.bind(this);
            },
            cracke_started: false,
            crackComing: function () {
                this.cracke_started = true;
                this.cracked.tw1.setPaused(false);
                this.cracked.tw2.setPaused(false);
            },
            collect: function (count, point) {
                if (count < this.part2.length) {
                    createjs.Tween.get(point, { override: true }).to({
                        x: this.part2[count].x,
                        y: this.part2[count].y,
                        scaleX: 1,
                        scaleY: 1
                    }, Math.random() * count + 1000, createjs.Ease.elasticInOut)
                        .call(function () {

                        }.bind(this));

                } else {
                    this.stage.removeChild(point);

                }
                if (count === this.particals.length) {
                    this.lastTextComing();
                    var times = 0;
                    this.mjolnir.children.forEach(function (child, idx) {
                        times++;
                        if (!child.alpha) {
                            createjs.Tween.get(child).wait(idx * 200).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 1000, createjs.Ease.elasticOut);
                        }
                    }, this);

                    setTimeout(function (_this) {
                        _this.particals.forEach(function (o, i) {
                            var n = i<50?i:50;
                            o.p.graphics.beginFill("#efdf6c").drawCircle(0, 0, 1, 1).endFill();
                            var scale = Math.random() * 5 + 1;
                            createjs.Tween.get(o.p).to({
                                x: o.p.x + (Math.random() < 0.5 ? Math.random() * (-300) : Math.random() * 300),
                                y: o.p.y + (Math.random() < 0.5 ? Math.random() * (-300) : Math.random() * 300),
                                scaleX: scale,
                                scaleY: scale,
                                alpha: 0
                            },  Math.random() * (n * 100) + (n * 100), createjs.Ease.quintOut)
                            .call(function(){
                                _this.stage.removeChild(o.p);
                            });
                        }, _this)
                    }, 600, this)
                }


            },
            lastTextComing: function () {
                this.lastText.tw.setPaused(false);
            }
        };

    win.header_show = header_show;
}(window));
