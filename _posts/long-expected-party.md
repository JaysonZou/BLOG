---
title: "The usage of GROUP_CONCAT"
excerpt: "how to use GROUP_CONCAT in SQL."
date: "2024-11-02"
---

`GROUP_CONCAT` 是一个 MySQL 的聚合函数，用于将多个行的值连接成一个字符串。它常用于在进行分组查询时将一组数据合并为一个列表，方便展示。

### 基本语法

```sql
GROUP_CONCAT(expr ORDER BY expr SEPARATOR separator)

```

- **expr**: 要连接的列名或表达式。
- **ORDER BY expr**: 可选，用于指定连接后结果的排序。
- **SEPARATOR separator**: 可选，用于指定连接时的分隔符，默认是逗号（`,`）。

### 示例

假设有一个名为 `students` 的表，包含 `class` 和 `student_name` 两列，数据如下：

| class | student_name |
| --- | --- |
| 1 | Alice |
| 1 | Bob |
| 2 | Charlie |
| 2 | David |

我们想要查询每个班级的学生姓名，使用 `GROUP_CONCAT` 可以这样写：

```sql
SELECT class, GROUP_CONCAT(student_name SEPARATOR ', ') AS students
FROM students
GROUP BY class;

```

### 结果

这个查询的结果将是：

| class | students |
| --- | --- |
| 1 | Alice, Bob |
| 2 | Charlie, David |

### 使用注意事项

1. **长度限制**：`GROUP_CONCAT` 的结果有最大长度限制，默认是 1024 字节，可以通过设置 `group_concat_max_len` 参数来增加这个限制。
2. **排序**：可以使用 `ORDER BY` 来控制输出的顺序，例如按字母顺序排序学生姓名。
