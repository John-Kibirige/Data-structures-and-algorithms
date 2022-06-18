
         if (r + 1 < matrix.length && current < matrix[r + 1][c])
            node.bottom = matrix[r + 1][c];

         if (c - 1 >= 0 && current < matrix[r][c - 1])
            node.left = matrix[r][c - 1];
